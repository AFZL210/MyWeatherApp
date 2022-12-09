import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const StartUrl = "https://api.openweathermap.org/data/2.5/weather?q="
  const EndUrl = "&appid=56bf8afec5be20a880e96ae3e69336c9"

  const [data,setData] = useState({
    cityName:"",
    temp:"",
    description:"",
    feels:"",
    humidity:"",
    windSpeed:""
  })
  const [location,setLocation] = useState("")
  

  const fetchDataFromApi = async(e) => {
    e.preventDefault()
   if(!location) {
    alert("Please Enter city name");
   }else{
    const url = `${StartUrl}${location}${EndUrl}`;
    const res = await fetch(url)
    const data = await res.json()
    
    
    const temp = (((data.main.temp) - 32 ) * 0.5556).toFixed(1);
    const feels = (((data.main.feels_like) - 32 ) * 0.5556).toFixed(1);
    const wind = (data.wind.speed * 1.6).toFixed(1);

    setData({
      cityName:data.name,
      temp:`${temp}°C`,
      description:data.weather.description,
      feels:`${feels}°C`,
      humidity:`${data.main.humidity}%`,
      windSpeed:`${wind} KMPH`
    })
   }
  }




  return (
    <div className="app">
      
    <div className='search-container'>
      <input type="text" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter Location"
      />
       <a onClick={fetchDataFromApi} ><img className='search-icon' src="https://raw.githubusercontent.com/AFZL210/MyWeatherApp/main/src/media/searchIcon.png" alt="" /></a>
      </div>

      <div className="container">
        <div className="top-container">
          <div className="city-name">
            <p>{data.cityName}</p>
          </div>
          <div className="temp">
            <h1>{data.temp}</h1>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-content">
          <div className="feels">
            <p>{data.feels}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data.windSpeed}</p>
            <p>Wind Speed</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
