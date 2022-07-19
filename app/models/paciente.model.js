module.exports = (sequelize, Sequelize) => {
  const Paciente = sequelize.define(
    'Paciente',
    {
      codPaciente: {
        field: 'cod_paciente',
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'document'
        }
      }
    },
    {
      tableName: 'pacientes',
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  )

  return Paciente
}
