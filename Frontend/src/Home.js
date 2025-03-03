import { LineChart, Line, XAxis, YAxis } from "recharts";
import axios from 'axios';
import React, { useEffect } from 'react'
const date = require('date-and-time');

//datapoints for line graph
const chart_data = [
    { name: "Page A", pv: 2400 }, { name: "Page B", pv: 1398, }, { name: "Page C", pv: 9730 }, { name: "Page D", pv: 3738 }, { name: "Page E", pv: 4730 }, { name: "Page F", pv: 3730 }, { name: "Page G", pv: 4500 },
  ];



const Home = () => {
    const [data, setData] = React.useState(null);



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

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Welcome to the CrisisConnect Dashboard</h1>
                    <h3 id='banner'></h3> 
                    <button onClick={GetClientData}>
                        Refresh
                    </button>
                    <div className="Chart-grid">
                        <section>
                        <div className="Chart">
                            
                        <p className="service">Service A</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={100} data={data}>
                        <XAxis dataKey="Timestamp"/>
                        <YAxis/>
                            <Line type="monotone" dataKey="IsUp" stroke="#F97316" strokeWidth={2} dot={true}/>
                        </LineChart>
                        </div>
                        <h5>sample text</h5>
                        </section>

                        
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home