const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      required: true,
      min: 0
    },
    satisfaction: {
      type: Number,
      required: true,
      min: 0, 
      max: 4
    },
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
TaskSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Task', TaskSchema)
