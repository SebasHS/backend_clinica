const db = require('../models')
const Especialidad = db.expecialidades

exports.index = async (req, res) => {
  const items = await Especialidad.findAll()
  res.json({
    items
  })
}

exports.show = async (req, res) => {
  const especialidad = await Especialidad.findByPk(req.params.id)
  res.json({ data: especialidad })
}

exports.store = async (req, res) => {
  try {
    const especialidad = await Especialidad.create(req.body)
    res.json({
      data: especialidad
    })
  } catch (error) {
    res.status(500).json(err)
  }
}

exports.update = async (req, res) => {
  try {
    const especialidad = await Especialidad.update(
      { name: req.body.nombre },
      { where: { id: req.params.id } }
    )
    res.json({ data: especialidad })
  } catch (error) {
    res.status(500).json(err)
  }
}

exports.destroy = async (req, res) => {
  try {
    const especialidad = await Especialidad.destroy({ where: { id: req.params.id } })
    res.json({ data: especialidad })
  } catch (error) {
    res.status(500).json(err)
  }
}

module.exports
