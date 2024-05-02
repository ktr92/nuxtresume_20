const Project = require('../models/project.model')

module.exports.create = async (req, res) => {
  const project = new Project({...req.body})

  try {
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Project.deleteOne({_id: req.params.id})
    res.status(200).json({message: 'Проект удален'})
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const projects = await Project.find().sort({prsort: 1})
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.getById = async (req, res) => { 
  try {
    const project = await Project.findById(req.params.id)
    res.status(200).json(project)   
   
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports.update = async (req, res) => {
  
  const $set = {
    prname: req.body.prname,
    prdescription: req.body.prdescription,
    prlink: req.body.prlink,
    prwork: req.body.prwork,
    prgit: req.body.prgit,
    prtags: req.body.prtags,
    prsort: req.body.prsort,
  }
  try {
    const project = await Project.findOneAndUpdate({
      _id: req.params.id
    }, $set, {new: true})
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
}



