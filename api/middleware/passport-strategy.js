/* const {model} = require('mongoose') */
const {Strategy, ExtractJwt} = require('passport-jwt')
const keys = require('../keys')
/* const User = model('users') */
const User = require('../models/user.model') 

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new Strategy(option, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.userId).select('id')
    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (error) {
    console.error(error)
  }
})