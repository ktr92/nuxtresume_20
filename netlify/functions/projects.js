const mongoose = require('mongoose')
const keys = require('./keys')
const Project = require('../models/project.model')

mongoose.connect(keys.MONGO_URI, {}) 
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

mongoose.set('strictQuery', false);
