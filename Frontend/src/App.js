import './App.css';
import React from 'react'
import axios from 'axios';


function App() {
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
    <h1>Testing frontend/backend communicaations</h1>
    <button onClick={() => GetData()}>Fetch Message</button>  

  </div>
  </header>
</div>
  );
}

export default App;
