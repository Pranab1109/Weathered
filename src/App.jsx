import React, { useContext } from 'react'
import './App.css'
import { WeatherProvider } from './weatherContext'
import Container from './components/Container'

//https://api.openweathermap.org/data/2.5/forecast?q=kolkata&units=metric&cnt=8&appid=5e1bec9aa03f1085e0c32f6baf4d9717
const App = () => {

  return (<>
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  </>
  )
}

export default App