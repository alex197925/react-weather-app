import React, {useState} from "react";
import axios from 'axios';



function App() {
//const url = `https://api.openweathermap.org/data/2.5/weather?q=antwerpen&appid=4068248e6fdf0020b855d97f00767e29`;

  return (
    <div className="app">
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
        </div>
        <div className="humidity">
          <p>20%</p>
        </div>
        <div className="wind">
          <p>14 km/h</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
