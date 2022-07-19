module.exports = (app) => {
  const auth = require('../controllers/auth.controller')

  var router = require('express').Router()

  router.post('/login', auth.login)
  router.post('/registro-paciente', auth.registroPaciente)
  router.post('/registro-doctor', auth.registroDoctor)

  app.use('/api/auth', router)
}
