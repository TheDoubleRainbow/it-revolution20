
const model = require('../models/task')
const utils = require('../middleware/utils')
const { matchedData } = require('express-validator')
const auth = require('../middleware/auth')
const db = require('../middleware/db')

/*********************
 * Private functions *
 *********************/

/**
 * Gets profile from database by id
 * @param {string} id - user id
 */
const getTasksFromDB = async userId => {
  return new Promise((resolve, reject) => {
    model.find({ 'userId': userId }, '-_id -updatedAt -createdAt', (err, user) => {
      utils.itemNotFound(err, user, reject, 'NOT_FOUND')
      resolve(user)
    })
  })
}

/********************
 * Public functions *
 ********************/

/**
 * Get profile function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getUserTasks = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query);
    const userId = await utils.isIDGood(req.user._id)
    query['_userId'] = userId
    // console.log(query);
    res.status(200).json(await db.getItems(req, model, query));
    // res.status(200).json(await getTasksFromDB(userId))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
  try {
    req.body = matchedData(req, { locations: ['body'] })
    // const doesCityExists = await cityExists(req.name)
    // if (!doesCityExists) {
    const userId = await utils.isIDGood(req.user._id)
    req.body['_userId'] = userId
    console.log(req.body, model);
    res.status(201).json(await db.createItem(req.body, model))
    // }
  } catch (error) {console.log(error);
    utils.handleError(res, error)
  }
}