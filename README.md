# 🌤 Weather App (React + OpenWeatherMap API)

This is a simple and responsive weather application built using **React**, **Axios**, and the **OpenWeatherMap API**. Users can enter a city name and view the current weather, temperature, and description.

## ✅ Features

- Search weather by city
- Shows:
  - Weather condition (e.g., Clear, Rain, Clouds)
  - Temperature in Celsius
  - Weather description
- Fully responsive (mobile & desktop support)
- Styled with Tailwind CSS
- Basic animations for UI elements

Demo Link : https://weather-report-beryl.vercel.app

## 🛠️ Tech Stack

- React JS  
- Axios  
- Tailwind CSS  
- OpenWeatherMap API

## 📁 Folder Structure
src/
├─ components/
│ └─ Weather.jsx
├─ App.js
├─ index.js

🔑 OpenWeatherMap API Setup

The project uses this API endpoint:

https://api.openweathermap.org/data/2.5/weather


Temperature is fetched using:

success.data.main.temp
