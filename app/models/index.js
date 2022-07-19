const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.usuarios = require('./usuario.model')(sequelize, Sequelize)
db.expecialidades = require('./especialidad.model')(sequelize, Sequelize)

db.horariosDoctor = require('./horarioDoctor.model.')(sequelize, Sequelize)
db.citas = require('./cita.model')(sequelize, Sequelize)
db.pacientes = require('./paciente.model')(sequelize, Sequelize)

db.doctores = require('./doctor.model')(sequelize, Sequelize)

module.exports = db
