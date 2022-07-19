const citaModel = require('./cita.model')
const moment = require('moment')

module.exports = (sequelize, Sequelize) => {
  const HorarioDoctor = sequelize.define(
    'HorarioDoctor',
    {
      codDoctor: {
        field: 'cod_doctor',
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'doctores',
          key: 'cod_doctor'
        }
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: false,
        get: function () {
          return moment(this.getDataValue('fechaInicio')).format('YYYY-MM-DD HH:mm')
        }
      },
      fechaFin: {
        type: Sequelize.DATE,
        allowNull: false,
        get: function () {
          return moment(this.getDataValue('fechaFin')).format('YYYY-MM-DD HH:mm')
        }
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    { tableName: 'horarios_doctor', underscored: true, paranoid: true }
  )
  const Cita = citaModel(sequelize, Sequelize)

  HorarioDoctor.hasOne(Cita, {
    as: 'cita',
    foreignKey: 'id_horario_doctor'
  })

  return HorarioDoctor
}
