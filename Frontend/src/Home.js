import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis } from "recharts";
const date = require("date-and-time");

// Sample chart data
const chart_data = [
    { name: "Page A", pv: 1 },
    { name: "Page B", pv: 1 },
    { name: "Page C", pv: 1 },
    { name: "Page D", pv: 0 },
    { name: "Page E", pv: 1 },
    { name: "Page F", pv: 1 },
    { name: "Page G", pv: 1 },
];

const Home = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("🚀 Home.js mounted");
        fetchClientData();
    }, []);

    const fetchClientData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/getClientUpdates");
            const parsedData = res.data.recordset.map((item) => ({
                ...item,
                Timestamp: date.parse(item.Timestamp, "YYYY/MM/DD HH:mm:ss"),
            }));
            setData(parsedData);
        } catch (err) {
            console.error("❌ Error fetching client updates:", err);
        }
    };

    const sendEmailAlert = async () => {
        const payload = {
            title,
            body,
            createdAt: new Date().toISOString(),
            createdBy: "satvik",
            active: true,
        };

        try {
            const res = await axios.post("http://localhost:5000/createAlert", payload);
            console.log(res);
            if (res.data.success) {
                alert("✅ Alert created successfully!");
            } else {
                alert("❌ Failed to create alert.");
            }
        } catch (error) {
            console.error("❌ Error sending alert:", error);
            alert("❌ Error sending alert.");
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Send an Email Alert</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button onClick={sendEmailAlert}>🚀 Send Alert</button>

                <h1>Welcome to the CrisisConnect Dashboard</h1>
                <button onClick={fetchClientData}>🔄 Refresh</button>

                <div className="Chart-grid">
                    {["Service A", "Service B", "Service C", "Service D", "Service E", "Service F"].map((service) => (
                        <div className="Chart" key={service}>
                            <p className="service">{service}</p>
                            <LineChart width={500} height={73} data={chart_data}>
                                <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false} />
                            </LineChart>
                        </div>
                    ))}
                </div>

                <div className="Chart">
                    <p className="service">Server A</p>
                    <LineChart width={500} height={100} data={data}>
                        <XAxis dataKey="Timestamp" />
                        <YAxis />
                        <Line type="monotone" dataKey="IsUp" stroke="#F97316" strokeWidth={2} dot={true} />
                    </LineChart>
                </div>
            </header>
        </div>
    );
};

export default Home;
