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
          <p>Antwerp</p>
        </div>
        <div className="temp">
          <h1>14°C</h1>
        </div>
        <div className="description">
          <p>Sunny</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>16°C</p>
          <p className="bold">Feels Like</p>
        </div>
        <div className="humidity">
          <p>20%</p>
          <p className="bold">Humidity</p>
        </div>
        <div className="wind">
          <p>14 km/h</p>
          <p className="bold">Wind</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
