module.exports = (sequelize, Sequelize) => {
  const Mensaje = sequelize.define(
    'Mensaje',
    {
      codPaciente: {
        field: 'cod_paciente',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'pacientes',
          key: 'codPaciente'
        }
      },
      codDoctor: {
        field: 'cod_doctor',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'doctores',
          key: 'codDoctor'
        }
      },
      mensaje: {
        type: Sequelize.STRING,
        allowNull: false
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
      tableName: 'mensajes',
      timestamps: true,
      underscored: true,
      paranoid: true
    }
  )

  return Mensaje
}
