const {Schema, model} = require('mongoose')

const projectSchema = new Schema({
  prname: {
    type: String,
    required: true
  },
  prdescription: {
    type: String,
  },
  prtags: {
    type: Array,
  },
  prlink: {
    type: String,
  },
  prgit: {
    type: String,
  },
  prwork: {
    type: String,
  },
  prpreview: {
    type: String,
  },
  prsort: {
    type: Number,
  },
})

module.exports = model('projects', projectSchema)
