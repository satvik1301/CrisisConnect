import './App.css';
import React from 'react'
import axios from 'axios';
import { LineChart, Line, XAxis } from "recharts";

//datapoints for line graph
const chart_data = [
  { name: "Page A", pv: 2400 }, { name: "Page B", pv: 1398, }, { name: "Page C", pv: 9730 }, { name: "Page D", pv: 3738 }, { name: "Page E", pv: 4730 }, { name: "Page F", pv: 3730 }, { name: "Page G", pv: 4500 },
];

function App() {
<div className="App">
      <header className="App-header">
     <div>
    <h1>Testing frontend/backend communicaations</h1>
    <button onClick={() => GetData()}>Fetch Message</button> 

  </div>
  </header>
</div>


const [data, setData] = React.useState(null);
// This function will be called when the button is clicked
async function GetData() {
  await axios.get('http://localhost:5000/api')
      .then(res => {
        setData(res.data)         
      })
      .catch(err => console.log(err))
}


console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to the CrisisConnect Dashboard</h1>
            {/*<button onClick={() => GetData()}>Fetch Message</button>*/}  

          <div className="Chart-grid">
            <div className="Chart">
              <p>Service A</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>

            <div className="Chart">
              <p>Service B</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>

            <div className="Chart">
              <p>Service C</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>
          
            <div className="Chart">
              <p>Service D</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>
          
            <div className="Chart">
              <p>Service E</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>
          
            <div className="Chart">
              <p>Service F</p>
              {/*this is the code to output the graph */}
              <LineChart width={500} height={73} data={chart_data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false}/>
              </LineChart>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
