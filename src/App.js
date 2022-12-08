import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=56bf8afec5be20a880e96ae3e69336c9"
  const [data,setData] = useState({})
  const [location,setLocation] = useState("")
  

  const fetchDataFromApi = async() => {
   
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }


  return (
    <div className="app">
      
    <div className='search-container'>
      <input type="text" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter Location"
      />
        <button onClick={fetchDataFromApi}>Search</button>
      </div>

      <div className="container">
        <div className="top-container">
          <div className="city-name">
            <p>Delhi</p>
          </div>
          <div className="temp">
            <h1>26°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-content">
          <div className="feels">
            <p>30°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p>Wind Speed</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
