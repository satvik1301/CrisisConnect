import './App.css';
import React from 'react'
import axios from 'axios';
import Home from './Home';
import Login from './Login';
import { Route, Routes, Link } from 'react-router-dom'

function App() {
/*<div className="App">
      <header className="App-header">
     <div>
    <h1>Testing frontend/backend communicaations</h1>
    <button onClick={() => GetData()}>Fetch Message</button> 

  </div>
  </header>
</div>
*/

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
      <div className="spacing"></div>
      <div className="Line"></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="Line"></div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;