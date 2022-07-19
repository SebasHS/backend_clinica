const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const usuarios = require('../controllers/usuario.controller')

  var router = require('express').Router()
  router.use(autentication)

  // ver perfil
  router.get('/', usuarios.verPerfil)
  // actualizar perfil
  router.patch('/', usuarios.actualizarPerfi)

  app.use('/api/perfil', router)
}
