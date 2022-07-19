const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const mensaje = require('../controllers/mensaje.controller')

  var router = require('express').Router()
  router.use(autentication)

  // Retrieve all Horarios
  router.get('/', mensaje.index)

  // Create a new HorarioDoctor
  router.post('/', mensaje.store)

  // Show a single HorarioDoctor with id
  router.get('/:id', mensaje.show)

  // Update a HorarioDoctor with id
  router.patch('/:id', mensaje.update)

  // Delete a HorarioDoctor with id
  router.delete('/:id', mensaje.destroy)

  app.use('/api/horarios-doctor', router)
}
