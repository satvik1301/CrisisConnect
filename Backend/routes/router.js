const express = require('express')
const router = express.Router()
const data = require('../usernames.json')

router.get('/api', (req, res) =>{

    res.send(data)
})

module.exports = router;