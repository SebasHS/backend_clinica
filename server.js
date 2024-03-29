const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: ['http://localhost:3000','http://frontend-clinica-chevere.herokuapp.com']
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models')

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to g1 application.' })
})

require('./app/routes/auth.route')(app)
require('./app/routes/usuario.route')(app)
require('./app/routes/especialidad.route')(app)
require('./app/routes/doctor.route')(app)
require('./app/routes/horarioDoctor.route')(app)

// set port, listen for requests

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
