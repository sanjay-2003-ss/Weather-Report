import axios from 'axios';
import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    let weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26e9b7697c159768c41c9096b2a47abc&units=metric`
    );

    weatherData.then(function (success) {
      console.log(success.data);
      setWeather(success.data.weather[0].main);
      setTemp(success.data.main.temp);
      setDescription(success.data.weather[0].description);
    });
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-400 to-blue-400 px-4">
      <div className="bg-gray-900 text-white p-10 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold text-center bg-red-500 text-black py-3 rounded-md animate-pulse">
          Weather Report
        </h1>

        <p className="text-center mt-3 text-gray-300">
          Enter your city to get the weather details
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={handleCity}
            className="flex-1 px-3 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-white"
          />
          <button
            onClick={getWeather}
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </div>

        {weather && (
          <div className="mt-8 bg-gray-700 p-5 rounded-md animate-fadeIn">
            <h2 className="text-xl font-semibold mb-3">Weather Details</h2>
            <p className="mb-1"><b>Weather:</b> {weather}</p>
            <p className="mb-1"><b>Temperature:</b> {temp} °C</p>
            <p className="mb-1"><b>Description:</b> {description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
