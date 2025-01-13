const express = require('express')
const router = express.Router()
const data = require('../usernames.json')
const sql = require('mssql')
const config = require('../Config/ssmsConfig')

router.get('/allAgents', async(req, res) =>{
try{
    const pool = await sql.connect(config)
    const data = pool.request().query('Select * From Agents')
    data.then(response =>{
        return res.json(response)}
    )

}
catch(err){
    console.log(err)
}
    
})

module.exports = router;