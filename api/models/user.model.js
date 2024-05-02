const {model, Schema} = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    minLenght: 6
  }
})

module.exports = model('user', userSchema)