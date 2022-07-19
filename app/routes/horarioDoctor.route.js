const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const horarioDoctor = require('../controllers/horarioDoctor.controller')

  var router = require('express').Router()
  router.use(autentication)

  // Retrieve all Horarios
  router.get('/', horarioDoctor.index)

  // Create a new HorarioDoctor
  router.post('/', horarioDoctor.store)

  // Show a single HorarioDoctor with id
  router.get('/:id', horarioDoctor.show)

  // Update a HorarioDoctor with id
  router.patch('/:id', horarioDoctor.update)

  // Delete a HorarioDoctor with id
  router.delete('/:id', horarioDoctor.destroy)

  app.use('/api/horarios-doctor', router)
}
