const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')


dotenv.config({path:'./config/config.env'})

//passport config
require('./config/passport')(passport)

//db connections
connectDB()

const app = express()


//cors
app.use(cors())

//logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//session
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:false
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 5000;
app.listen(PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))