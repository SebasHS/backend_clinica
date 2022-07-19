const usuarioModel = require('./usuario.model')
const especialidadModel = require('./especialidad.model')
const horarioDoctorModel = require('./horarioDoctor.model.')

module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define(
    'Doctor',
    {
      codDoctor: {
        field: 'cod_doctor',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'document'
        }
      },
      especialidadId: {
        field: 'especialidad_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'especialidades',
          key: 'id'
        }
      },
      precioVirtual: {
        field: 'precio_virtual',
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      precioPresencial: {
        field: 'precio_presencial',
        type: Sequelize.DOUBLE,
        allowNull: true
      }
    },
    { tableName: 'doctores', freezeTableName: true, timestamps: false, underscored: true }
  )

  const Usuario = usuarioModel(sequelize, Sequelize)
  const Especialidad = especialidadModel(sequelize, Sequelize)
  const HorarioDoctor = horarioDoctorModel(sequelize, Sequelize)

  Doctor.belongsTo(Usuario, {
    as: 'usuario',
    foreignKey: 'codDoctor'
  })
  Doctor.belongsTo(Especialidad, {
    as: 'especialidad',
    foreignKey: 'especialidadId'
  })

  Doctor.hasMany(HorarioDoctor, {
    as: 'horarios',
    foreignKey: 'codDoctor'
  })

  return Doctor
}
