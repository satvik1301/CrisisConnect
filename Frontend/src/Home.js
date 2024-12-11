import { LineChart, Line, XAxis } from "recharts";
import { Link } from 'react-router-dom';

//datapoints for line graph
const chart_data = [
    { name: "Page A", pv: 2400 }, { name: "Page B", pv: 1398, }, { name: "Page C", pv: 9730 }, { name: "Page D", pv: 3738 }, { name: "Page E", pv: 4730 }, { name: "Page F", pv: 3730 }, { name: "Page G", pv: 4500 },
  ];

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Welcome to the CrisisConnect Dashboard</h1>
                    {/*<button onClick={() => GetData()}>Fetch Message</button>*/}  

                    <div className="Chart-grid">
                        <div className="Chart">
                        <p className="service">Service A</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>

                        <div className="Chart">
                        <p className="service">Service B</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>

                        <div className="Chart">
                        <p className="service">Service C</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>
                    
                        <div className="Chart">
                        <p className="service">Service D</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>
                    
                        <div className="Chart">
                        <p className="service">Service E</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>
                    
                        <div className="Chart">
                        <p className="service">Service F</p>
                        {/*this is the code to output the graph */}
                        <LineChart width={500} height={73} data={chart_data}>
                            <Line type="monotone" dataKey="pv" stroke="#F97316" strokeWidth={2} dot={false}/>
                        </LineChart>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home