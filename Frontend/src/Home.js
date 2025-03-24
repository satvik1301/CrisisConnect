import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import axios from 'axios';
const date = require('date-and-time');

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
    const [data, setData] = React.useState(null);

    console.log(data);

  async function GetClientData() {
    await axios.get('http://localhost:5000/getClientUpdates')
        .then(res => {
            const data1 = res.data.recordset.map(res1 => {
                return {
                    ...res1,
                    Timestamp: date.parse(res1.Timestamp, 'YYYY/MM/DD HH:mm:ss')
                }
            })

          setData(data1)         
        })
        .catch(err => console.log(err))
  }

  

  console.log(data);

  useEffect(() => {
    axios.get('http://localhost:5000/getClientUpdates')
        .then(res => {
            console.log(res);
            const data1 = res.data.recordset.map(res1 => {
                return {
                    ...res1,
                    Timestamp: date.parse(res1.Timestamp, 'YYYY/MM/DD HH:mm:ss')
                }
            })
          setData(data1)         
        })
        .catch(err => console.log(err))
}, [])

    return  (
        <div className="App">
            <header className="App-header">
                
                    <h1 style={{ background: "red", color: "white", padding: "20px" }}>
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

                    <h2 style={{ background: "yellow", color: "black", padding: "10px" }}>
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
                    <h1>Welcome to the CrisisConnect Dashboard</h1>
                    <h3 id='banner'></h3> 
                    <button onClick={GetClientData}>
                        Refresh
                    </button>
                    <div className="Chart-grid">
                        <div className="Chart">
                            
                        <p className="service">Server A</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={750} height={100} data={data}>
                        <XAxis dataKey="CreatedAt"/>
                        <YAxis/>
                            <Line type="monotone" dataKey="IsUp" stroke="#F97316" strokeWidth={2} dot={true}/>
                        </LineChart>
                            {/* all of this is the sample chart I used as a visual example */}
                            {/*<p className="service">Service A</p>*/}
                            {/*this is the code to output the graph */}
                            {/*<LineChart width={500} height={73} data={chart_data}>
                                <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                            </LineChart>*/}
                        
                            <section className="subheader">
                                <p className="notification">Sample Text</p>
                                <div className="Comments">
                                    <p>sample text</p>
                                </div>
                                <textarea className="Comment" />
                                <br/>  
                                <button>submit</button>             
                            </section>

                        </div>
                        
                    </div>
                </div>
            </header>
        </div>
        )
}

export default Home;
