import { LineChart, Line } from "recharts";
import React, { useState, useEffect } from "react";

const chart_data = [
    { name: "Page A", pv: 2400 }, { name: "Page B", pv: 1398 }, 
    { name: "Page C", pv: 9730 }, { name: "Page D", pv: 3738 }, 
    { name: "Page E", pv: 4730 }, { name: "Page F", pv: 3730 }, 
    { name: "Page G", pv: 4500 },
];

const Home = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        console.log("🚀 Home.js has been rendered!");
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    {/* 🚨 FORCE VISIBLE DEBUGGING ELEMENTS */}
                    <h1 style={{ background: "red", color: "white", padding: "20px" }}>
                        🚀 HOME.JS IS LOADED!
                    </h1>

                    <div className="Chart-grid">
                        {["Service A", "Service B", "Service C", "Service D", "Service E", "Service F"].map(service => (
                            <div className="Chart" key={service}>
                                <p className="service">{service}</p>
                                <LineChart width={500} height={73} data={chart_data}>
                                    <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false} />
                                </LineChart>
                            </div>
                        ))}
                    </div>

                    {/* 🚨 Debugging Section */}
                    <h2 style={{ background: "yellow", color: "black", padding: "10px" }}>
                        🛠 DEBUG: Checking Email Alert Section Visibility
                    </h2>

                    <div style={{ 
                        marginTop: "20px", 
                        padding: "20px", 
                        border: "5px solid green", 
                        backgroundColor: "white"
                    }}>
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
                        ></textarea>
                        <button onClick={() => alert("🚀 Button Clicked!")}>🚀 Send Alert</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
