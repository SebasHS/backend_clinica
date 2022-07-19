const usuarioModel = require('./usuario.model')

module.exports = (sequelize, Sequelize) => {
  const Cita = sequelize.define(
    'Cita',
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      codDoctor: {
        field: 'cod_doctor',
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'doctores',
          key: 'cod_doctor'
        }
      },
      codPaciente: {
        field: 'cod_paciente',
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'pacientes',
          key: 'cod_paciente'
        }
      },
      idHorarioDoctor: {
        field: 'id_horario_doctor',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'horarios_doctor',
          key: 'id'
        }
      },
      motivo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      calificacion: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      lugar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notaExtra: {
        field: 'nota_extra',
        type: Sequelize.STRING,
        allowNull: true
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: true
      },
      diagnostico: {
        type: Sequelize.STRING,
        allowNull: true
      },
      receta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
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
    {
      tableName: 'citas',
      timestamps: true,
      underscored: true,
      paranoid: true
    }
  )
  const Usuario = usuarioModel(sequelize, Sequelize)

  Cita.belongsTo(Usuario, {
    as: 'paciente',
    foreignKey: 'codPaciente'
  })

  return Cita
}
