const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const cita = require('../controllers/cita.controller')

  var router = require('express').Router()
  router.use(autentication)

  // Retrieve all Citas
  router.get('/', cita.index)

  // Create a new Citas
  router.post('/', cita.store)

  // Show a single Citas with id
  router.get('/:id', cita.show)

  // Update a Citas with id
  router.patch('/:id', cita.update)

  // Delete a Citas with id
  router.delete('/:id', cita.destroy)

  app.use('/api/citas', router)
}
