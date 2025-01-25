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

router.get('/allAlerts', async(req, res) =>{
    try{
        const pool = await sql.connect(config)
        const data = pool.request().query('Select * From Alerts')
        data.then(response =>{
            return res.json(response)}
        )
    
    }
    catch(err){
        console.log(err)
    }
        
    })

    router.get('/getAllAgents', async(req, res) =>{
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

    router.put('/clientupdate', async(req, res) =>{
        console.log(req)
        try{
            const pool = await sql.connect(config)
            const data = pool.request().query(`INSERT INTO Services (AgentID, ServiceID, ServiceName, Status, CreatedAt) VALUES (${req.AgentID}, ${req.ServiceID}, ${ServiceName}, ${Status}, ${CreatedAt})`)
            return res(data);
        }
        catch(err){
            console.log(err)
        }
            
        })

module.exports = router;