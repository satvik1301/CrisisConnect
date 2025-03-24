const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('../Config/ssmsConfig');
const date = require('date-and-time');

// Sample GET: Fetch all agents
router.get('/allAgents', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM Agents');
        res.json(result);
    } catch (err) {
        console.error('Error fetching agents:', err);
        res.status(500).json({ error: 'Failed to fetch agents' });
    }
});

// Sample GET: Fetch all alerts
router.get('/allAlerts', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM Alerts');
        res.json(result);
    } catch (err) {
        console.error('Error fetching alerts:', err);
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
});

// ✅ POST: Create a new alert (fixing your issue)
router.post('/createAlert', async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const createdAt = req.body.createdAt;
    const createdBy = req.body.createdBy;
    const active = req.body.active;

    try {
        
        console.log("Incoming Alert:", req.body);

        const pool = await sql.connect(config);
        await pool.request().query(`
            INSERT INTO Alerts (title, body, createdAt, createdBy, active) 
            VALUES ('${title}', '${body}', '${createdAt}', '${createdBy}', '${active}')
        `);

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("❌ Backend error in /createAlert:", err);
        return res.status(500).json({ success: false, message: "Backend error" });
    }
});



// GET: Return all client updates
router.get('/getClientUpdates', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM AgentCheckins');
        res.json(result);
    } catch (err) {
        console.error('Error fetching client updates:', err);
        res.status(500).json({ error: 'Failed to fetch client updates' });
    }
});

// POST: Add a new client check-in (for server status)
router.post('/clientUpdate', async (req, res) => {
    const { SystemUsage, SystemUptime } = req.body;

    console.log(req.body);

    const int1 =  req.body.IPAddress.replace(".", "")
    const int2 =  int1.replace(".", "");
    const AgentID = Number(int2.replace(".", ""))
    const Devicename = req.body.Machine;
    const IPAddress = req.body.IPAddress;
    const Timestamp = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    console.log(AgentID)
    try {
        const pool = await sql.connect(config);
        await pool.request().query(`
            INSERT INTO AgentCheckins (AgentID, Devicename, IPAddress, ResourceUsage, Uptime, Timestamp, IsUp)
            VALUES (${AgentID}, '${Devicename}', '${IPAddress}', '${SystemUsage}', '${SystemUptime}', '${Timestamp}', 100)
        `);
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Error inserting client update:', err);
        res.status(500).json({ success: false });
    }
});

// GET: Active alerts only
router.get('/activeAlerts', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query(`SELECT * FROM Alerts WHERE active = "True"`);
        res.json(result);
    } catch (err) {
        console.error('Error fetching active alerts:', err);
        res.status(500).json({ error: 'Failed to fetch active alerts' });
    }
});

module.exports = router;
