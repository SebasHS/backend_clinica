const db = require('../models')
const HorarioDoctor = db.horariosDoctor
const Op = db.Sequelize.Op

exports.index = async (req, res) => {
  const items = await HorarioDoctor.findAll({
    where: {
      codDoctor: req.user.document
    }
  })
  res.json({
    items
  })
}

exports.show = async (req, res) => {
  try {
    const horarioDoctor = await HorarioDoctor.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.store = async (req, res) => {
  try {
    const request = {
      codDoctor: req.user.document,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin
    }

    if (request.fechaFin < request.fechaInicio) {
      res.status(403).json({
        msg: 'La fecha de fin no puede ser menor a la del inicio'
      })
      return
    }
    const findHorario = await HorarioDoctor.findOne({
      where: {
        codDoctor: request.codDoctor,
        fechaFin: {
          [Op.gt]: request.fechaInicio
        }
      }
    })
    if (findHorario) {
      res.status(403).json({
        msg: 'No se pudo crear el horario verifique las fechas ingresadas'
      })
      return
    }
    const horarioDoctor = await HorarioDoctor.create(request)
    res.json({
      data: horarioDoctor
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

exports.update = async (req, res) => {
  try {
    const request = { fecha: req.body.fecha }
    const horarioDoctor = await HorarioDoctor.update(request, {
      where: { id: req.params.id }
    })
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.destroy = async (req, res) => {
  try {
    const horarioDoctor = await HorarioDoctor.destroy({ where: { id: req.params.id } })
    res.json({ data: horarioDoctor })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports
