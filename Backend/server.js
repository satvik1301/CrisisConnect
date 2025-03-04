const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const app =  express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router)
app.use(express.json());

const port = 5000
const server = `localhost`;

app.listen(port, server,  () => {
    console.log(`Server is running on port ${port}`)
})


