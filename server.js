const express = require('express')
const app = express()
const routesUrls = require('./api/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION, () => console.log('Database connected'))

app.use(express.json())
app.use('/api/routes', routesUrls)
app.listen(6000, () => console.log('Server Running and RUnning Well'))