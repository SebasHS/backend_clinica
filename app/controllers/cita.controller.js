const db = require('../models')
const Cita = db.citas
const HorarioDoctor = db.horariosDoctor

exports.index = async (req, res) => {
  const items = await Cita.findAll({
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
    const cita = await Cita.findOne({
      where: {
        id: req.params.id
      }
    })
    // TODO: filter only document
    res.json({ data: cita })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.store = async (req, res) => {
  try {
    const request = {
      codDoctor: req.user.document,
      codPaciente: req.body.codPaciente,
      idHorarioDoctor: req.body.idHorarioDoctor,
      motivo: req.body.motivo,
      calificacion: req.body.calificacion,
      precio: req.body.precio,
      lugar: req.body.lugar,
      notaExtra: req.body.notaExtra,
      comentario: req.body.comentario,
      diagnostico: req.body.diagnostico,
      receta: req.body.receta
    }

    const horarioDoctor = await HorarioDoctor.findOne({
      where: {
        id: request.idHorarioDoctor,
        codDoctor: request.codDoctor
      }
    })

    if (!horarioDoctor) {
      res.status(403).json({
        msg: 'el horario no esta disponible para el doctor'
      })
      return
    }
    const findCita = await Cita.findOne({
      where: {
        codDoctor: request.codDoctor,
        codPaciente: request.codPaciente,
        idHorarioDoctor: request.idHorarioDoctor
      }
    })

    if (findCita) {
      res.status(403).json({
        msg: 'Ya hay una cita programada con esos datos'
      })
      return
    }
    const cita = await Cita.create(request)
    res.json({
      data: cita
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

exports.update = async (req, res) => {
  try {
    const request = {
      motivo: req.body.motivo,
      calificacion: req.body.calificacion,
      precio: req.body.precio,
      lugar: req.body.lugar,
      notaExtra: req.body.notaExtra,
      comentario: req.body.comentario,
      diagnostico: req.body.diagnostico,
      receta: req.body.receta
    }
    const cita = await Cita.update(request, {
      where: { id: req.params.id }
    })
    res.json({ data: cita })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.destroy = async (req, res) => {
  try {
    const cita = await Cita.destroy({ where: { id: req.params.id } })
    res.json({ data: cita })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

module.exports
