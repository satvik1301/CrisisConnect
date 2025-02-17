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

    router.post('/clientUpdate', async(req, res) =>{
        const clientData = req.body; 
        console.log(clientData);
       /* try{
            const pool = await sql.connect(config)
            const data = pool.request().query(`INSERT INTO Services (AgentID, ServiceID, ServiceName, Status, CreatedAt) VALUES (${req.AgentID}, ${req.ServiceID}, ${ServiceName}, ${Status}, ${CreatedAt})`)
            return res(200);
        }
        catch(err){
            console.log(err)
        }*/
            
        })

        router.post('/createAlert', async(req, res) =>{
            console.log(req)
            try{
                const pool = await sql.connect(config)
                const data = pool.request().query(`INSERT INTO Alerts (title, body, createdAt, createdBy, active) VALUES (${req.title}, ${req.body}, ${req.createdAt}, ${req.createdBy}, ${req.active})`)
                return res(200);
            }
            catch(err){
                console.log(err)
            }
                
            })

        router.get('/activeAlerts', async(req, res) =>{
            try{
                const pool = await sql.connect(config)
                const data = pool.request().query(`Select * FROM Alerts WHERE active = 'true' `)
                data.then(response =>{
                    return res.json(response)}
                )
            
            }
            catch(err){
                console.log(err)
            }
                
            })
module.exports = router;