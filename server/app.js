require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const middleware = require('./lib/middleware.js')
const error_middleware = require('./lib/errors.js')
const PORT = !process.env.PORT ? 3945 : process.env.PORT
const routes = require('./lib/routes.js')
// middleware
middleware(app,express,bodyParser,cors)

//routes
routes(app)

// error middleware
error_middleware(app)

// listen on server (app)
app.listen(PORT,()=>{
    console.log('You have entered the Server\n----------------\nPort: '+PORT+"\nEnjoy!")
})