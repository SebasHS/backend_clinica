module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      document: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [8, 14],
            msg: 'El documento tiene que tener minimamente 8 caracteres y maximo 14'
          }
        }
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidoPaterno: {
        field: 'apellido_p',
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidoMaterno: {
        field: 'apellido_m',
        type: Sequelize.STRING,
        allowNull: false
      },
      numContacto: {
        type: Sequelize.STRING,
        field: 'num_contacto'
      },
      fechaNacimiento: {
        field: 'fecha_nacimiento',
        type: Sequelize.STRING
      },
      imagen: { type: Sequelize.STRING },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: { msg: 'email inválido' }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'La contraseña tiene que tener minimamente 6 caracteres'
          }
        }
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      }
    },
    {
      tableName: 'usuarios',
      freezeTableName: true,
      timestamps: true,
      underscored: true
    }
  )

  return Usuario
}
