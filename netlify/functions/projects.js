const mongoose = require('mongoose')
const keys = require('./keys')
const Project = require('../models/project.model')

mongoose.connect(keys.MONGO_URI, {}) 
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

mongoose.set('strictQuery', false);

try {
  const projects = await Project.find().sort({prsort: 1})
  res.status(200).json(projects)
} catch (error) {
  res.status(500).json(error)
}