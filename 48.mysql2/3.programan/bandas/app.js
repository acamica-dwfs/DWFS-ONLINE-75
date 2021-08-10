const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 3000
const cors = require('cors')
const sequelize = require('./conexion')


// Routes
const bandasRoute = require('./routers/bandas.routes')
const songsRoute = require('./routers/canciones.routes')
const albumRoute = require('./routers/albumes.routes')


//Middleware
const app = express()
app.use(helmet())
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Middleware

// Routes use
/* app.use(bandasRoute)
app.use(songsRoute) */
app.use('/api/albumes', albumRoute)
app.use('/api/canciones', songsRoute)
app.use('/api/bandas', bandasRoute)


//Server
 app.listen(PORT, ()=>{
    console.log(`Server started in the ${PORT}`);
 })

 exports.app = app

