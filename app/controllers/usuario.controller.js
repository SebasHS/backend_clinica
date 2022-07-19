const db = require('../models')
const Usuario = db.usuarios
const Doctor = db.doctores
const Paciente = db.pacientes

exports.verPerfil = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({
      attributes: { exclude: ['password'] },
      where: {
        document: req.user.document
      }
    })

    if (!usuario) {
      res.status(403).json({
        msg: 'usuario no encontrado'
      })
      return
    }

    const doctor = await Doctor.findOne({
      where: {
        codDoctor: req.user.document
      }
    })

    const paciente = await Paciente.findOne({
      where: {
        codPaciente: req.user.document
      }
    })

    usuario = usuario.toJSON()

    usuario.doctor = doctor
    usuario.paciente = paciente
    res.json({
      data: usuario
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
  }
}

exports.actualizarPerfi = async (req, res) => {
  const t = await db.sequelize.transaction()
  try {
    const request = {
      apellidoMaterno: req.body.apellidoMaterno,
      apellidoPaterno: req.body.apellidoPaterno,
      email: req.body.email,
      fechaNacimiento: req.body.fechaNacimiento,
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      numContacto: req.body.numContacto
    }

    let usuario = await Usuario.update(request, {
      where: {
        document: req.user.document
      }
    })

    if (req.body.doctor) {
      const requestDoctor = {
        especialidadId: req.body.doctor.especialidadId,
        precioPresencial: req.body.doctor.precioPresencial,
        precioVirtual: req.body.doctor.precioVirtual
      }
      await Doctor.update(requestDoctor, {
        where: {
          codDoctor: req.body.doctor.codDoctor
        }
      })
    }

    if (req.body.paciente) {
      const requestPaciente = {
        especialidadId: req.body.paciente.especialidadId,
        precioPresencial: req.body.paciente.precioPresencial,
        precioVirtual: req.body.paciente.precioVirtual
      }
      await Doctor.update(requestPaciente, {
        where: {
          codPaciente: req.body.paciente.codPaciente
        }
      })
    }
    await t.commit()

    res.json({
      data: usuario
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json(error)
    await t.rollback()
  }
}
