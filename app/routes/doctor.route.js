const autentication = require('../middelwares/autentication')

module.exports = (app) => {
  const doctor = require('../controllers/doctor.controller')

  var router = require('express').Router()
  //router.use(autentication)

  // Retrieve all Usuarios
  router.get('/', doctor.index)

  // Create a new Especialidad
  router.post('/', doctor.store)

  // Show a single Especialidad with id
  router.get('/:id', doctor.show)

  // Update a Especialidad with id
  router.patch('/:id', doctor.update)

  // Delete a Especialidad with id
  router.delete('/:id', doctor.destroy)

  app.use('/api/doctores', router)
}
