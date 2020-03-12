const passport = require('passport')
const User = require('../app/models/user')
const auth = require('../app/middleware/auth')
const JwtStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/**
 * Extracts token from: header, body or query
 * @param {Object} req - request object
 * @returns {string} token - decrypted token
 */
const jwtExtractor = req => {
  let token = null
  if (req.headers.authorization) {
    token = req.headers.authorization.replace('Bearer ', '').trim()
  } else if (req.body.token) {
    token = req.body.token.trim()
  } else if (req.query.token) {
    token = req.query.token.trim()
  }
  if (token) {
    // Decrypts token
    token = auth.decrypt(token)
  }
  return token
}

/**
 * Options object for jwt middlware
 */
const jwtOptions = {
  jwtFromRequest: jwtExtractor,
  secretOrKey: process.env.JWT_SECRET
}

/**
 * Login with JWT middleware
 */
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.data._id, (err, user) => {
    if (err) {
      return done(err, false)
    }
    return !user ? done(null, false) : done(null, user)
  })
})

passport.use(jwtLogin)

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACL_URL
},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);
  // displayName
  User.findOne({ googleId: profile.id }, function (err, user) {
    console.log("Error", err, "USER", user);
    if(!user) {
      let user = new User({
        name: profile.displayName,
        googleId: profile.id,
      })
      user.save().then((doc) => {
        console.log(doc);
        return cb(err, user)
      })
    } else {
      cb(err, user);
    }
  })
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    
  //   // return cb(err, user);
  // });
}
));
