const db = require('../models')
const Doctor = db.doctores
const HorarioDoctor = db.horariosDoctor
const Cita = db.citas
const Usuario = db.usuarios
const Op = db.Sequelize.Op

exports.index = async (req, res) => {
  const items = await Doctor.findAll({
    include: [
      {
        model: Usuario,
        as: 'usuario',
        attributes: { exclude: ['password'] }
      },
      'especialidad'
    ],
    attributes: { exclude: ['password'] }
  })
  res.json({
    items
  })
}

exports.show = async (req, res) => {
  try {
    let doctor = await Doctor.findOne({
      where: {
        codDoctor: req.params.id
      },
      include: [
        'especialidad',
        {
          model: Usuario,
          as: 'usuario',
          attributes: { exclude: ['password'] }
        }
      ]
    })

    const horarios = await HorarioDoctor.findAll({
      row: true,
      where: {
        codDoctor: req.params.id,
        fechaInicio: {
          [Op.gt]: new Date()
        }
      },
      include: [
        {
          model: Cita,
          as: 'cita',
          include: [
            {
              model: Usuario,
              as: 'paciente',
              attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
            }
          ]
        }
      ]
    })

    if (doctor) {
      doctor = doctor.toJSON()

      doctor.horarios = horarios
      doctor.proximasCitas = horarios.filter(({ cita }) => cita)
    }
    res.json({ data: doctor })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

exports.store = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body)
    res.json({
      data: doctor
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.update = async (req, res) => {
  try {
    const doctor = await Doctor.update(
      { name: req.body.name },
      { where: { id: req.params.id } }
    )
    res.json({ data: doctor[0] })
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.destroy = async (req, res) => {
  try {
    const doctor = await Doctor.destroy({ where: { id: req.params.id } })
    res.json({ data: doctor[0] })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports
