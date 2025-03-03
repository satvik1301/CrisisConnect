const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const app =  express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: 'localhost',
    credentials: false,
    optionSuccessStatus: 200
}

app.use(cors())
app.use('/', router)
app.use(express.json());

const port = 5000
const server = '192.168.113.241'

app.listen(port, server, () => {
    console.log(`Server is running on port ${port}`)
})


