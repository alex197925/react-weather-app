import React, {useState} from "react";
import axios from 'axios';



function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

   //Get data from API with axios
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4068248e6fdf0020b855d97f00767e29`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />
      </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°F</h1> : null}
          {/*<h1>{data.main.temp}°F</h1> Temp not exist have to check */}
        </div>
        <div className="description">
          {/*Check if its: Cloud, Sunny.....*/}
          <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {/*Check feels like temperature*/}
          {data.main ? <p className="bold">{data.main.feels_like} °F</p> : null}
          <p className="bold">Feels Like</p>
        </div>
        <div className="humidity">
          {/*Check humidity*/}
          {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
          <p className="bold">Humidity</p>
        </div>
        <div className="wind">
          {/*Check wind*/}
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
          <p className="bold">Wind</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
