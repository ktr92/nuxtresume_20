const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const projectRoutes = require('./routes/project.routes')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, {}) 
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

mongoose.set('strictQuery', false);
app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({
extended: true
}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)


module.exports = app
