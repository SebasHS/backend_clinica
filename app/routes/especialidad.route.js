const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const especialidades = require('../controllers/especialidad.controller')

  var router = require('express').Router()
  router.use(autentication)

  // Retrieve all Usuarios
  router.get('/', especialidades.index)

  // Create a new Especialidad
  router.post('/', especialidades.store)

  // Show a single Especialidad with id
  router.get('/:id', especialidades.show)

  // Update a Especialidad with id
  router.patch('/:id', especialidades.update)

  // Delete a Especialidad with id
  router.delete('/:id', especialidades.destroy)

  app.use('/api/expecialidades', router)
}
