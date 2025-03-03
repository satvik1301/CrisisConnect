const express = require('express')
const router = express.Router()
const data = require('../usernames.json')
const sql = require('mssql')
const config = require('../Config/ssmsConfig')
const date = require('date-and-time');

const AgentIDs = [1,2];

async function checkUp() {
    console.log('This task runs every minute.');

    const newdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')
    const CurrentTime = date.parse(newdate, 'YYYY/MM/DD HH:mm:ss')
    console.log(`Current Time ${CurrentTime}`)

    //const checkins

    try{
        const pool = await sql.connect(config)
        const data = pool.request().query(`WITH latest AS 
     ( SELECT AgentID,
                CreatedAt
                OVER(PARTITION BY AgentID
                         ORDER BY created_at DESC) AS rn 
         FROM AgentCheckins )
SELECT *
  FROM latest
 WHERE rn = 1`)
        data.then(response =>{
            console.log(response.recordset)
        }
        )
    
    }
    catch(err){
        console.log(err)
    }
    
  }

setInterval(checkUp, 1000)



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

        const AgentID = 2;
        const Devicename = 'testdevice'//(req.body.Machine);
        const IPAdress = '192.168.113.242'//(req.body.IPAddress)
        const ResourceUsage = (req.body.SystemUsage);
        const Uptime = (req.body.SystemUptime);
        const newdate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')
        const Timestamp = date.parse(newdate, 'YYYY/MM/DD HH:mm:ss')

        console.log(`${Devicename} Data Saved`)
      //  console.log(req.body)

        try{
            const pool = await sql.connect(config)
            const data = pool.request().query(`INSERT INTO AgentCheckins (AgentID, Devicename, IPAddress, ResourceUsage, Uptime, Timestamp, IsUp) 
                VALUES (${AgentID}, '${Devicename}', '${IPAdress}', '${ResourceUsage}', '${Uptime}', '${newdate}', 100)`)
            return res.status(200);
        }
    
        catch(err){
            console.log(err)
        }
            
        })

        router.get('/getClientUpdates', async(req, res) =>{          
    
            try{
                const pool = await sql.connect(config)
                const data = pool.request().query(`SELECT * FROM AgentCheckins`)
                data.then(res1 =>{
                    return res.json(res1);
                }
                )
            }
        
            catch(err){
                console.log(err)
            }
                
            })

        router.post('/createAlert', async(req, res) =>{
            console.log(req)
            try{
                const pool = await sql.connect(config)
                const data = pool.request().query(`INSERT INTO Alerts (title, body, createdAt, createdBy, active) VALUES (${req.title}, ${req.body}, ${req.createdAt}, ${req.createdBy}, ${req.active})`)
                return res.status(200);
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