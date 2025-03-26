import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { FaPaperPlane, FaEnvelopeOpen } from "react-icons/fa";
const date = require("date-and-time");

const chart_data = [
    { name: "Page A", pv: 2400 },
    { name: "Page B", pv: 1398 },
    { name: "Page C", pv: 9730 },
    { name: "Page D", pv: 3738 },
    { name: "Page E", pv: 4730 },
    { name: "Page F", pv: 3730 },
    { name: "Page G", pv: 4500 },
];

const Home = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [data, setData] = useState([]);
    const [showAlertBox, setShowAlertBox] = useState(false);

    useEffect(() => {
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
        if (!title || !body) {
            alert("⚠️ Title and message are required.");
            return;
        }

        const payload = {
            title,
            body,
            createdAt: new Date().toISOString(),
            createdBy: "satvik",
            active: true,
        };

        try {
            const res = await axios.post("http://localhost:5000/createAlert", payload, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.data.success) {
                alert("✅ Alert created successfully!");
                setTitle("");
                setBody("");
            } else {
                alert("❌ Failed to create alert.");
            }
        } catch (error) {
            console.error("❌ Error sending alert:", error);
            alert("❌ Error sending alert.");
        }
    };

    return (
        <div className="App" style={{ position: "relative", padding: "1rem" }}>
            <header className="App-header">
                {/* Toggle Icon */}
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        cursor: "pointer",
                        zIndex: 1000,
                    }}
                    onClick={() => setShowAlertBox(!showAlertBox)}
                >
                    <FaEnvelopeOpen size={24} color="#3B82F6" />
                </div>

                {/* Alert Box */}
                {showAlertBox && (
                    <div
                        style={{
                            position: "absolute",
                            top: 60,
                            left: 20,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            padding: "1rem",
                            borderRadius: "12px",
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                            width: "230px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ width: "100%", padding: "8px", marginBottom: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                        <input
                            type="text"
                            placeholder="Message"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                        <button
                            onClick={sendEmailAlert}
                            style={{
                                backgroundColor: "#2563EB",
                                color: "white",
                                padding: "8px",
                                border: "none",
                                borderRadius: "6px",
                                width: "100%",
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            <FaPaperPlane style={{ marginRight: "6px" }} /> Send Alert
                        </button>
                    </div>
                )}

                <h1 style={{ color: "black" }}>Welcome to the CrisisConnect Dashboard</h1>
                <button onClick={fetchClientData}>🔄 Refresh</button>

                <div className="Chart-grid">
                    {["Service A", "Service B", "Service C", "Service D", "Service E", "Service F"].map((service) => (
                        <div className="Chart" key={service}>
                            <p className="service">{service}</p>
                            <LineChart width={250} height={100} data={chart_data}>
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
