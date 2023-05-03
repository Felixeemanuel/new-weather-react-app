import React, { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'
import axios from 'axios'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import { BsSunrise } from 'react-icons/bs'
import { TbTemperature } from 'react-icons/tb'
import { FiWind } from 'react-icons/fi'


function App() {

  const [weather, setWeather] = useState({})
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // const [date, setDate] = useState({})

  // const today = new Date()
  // moment(today).format('LLLL')
  // console.log(today)
  // console.log(today)

  const url = `http://api.weatherapi.com/v1/forecast.json?key=46c7d7175abc4107878145524232904&q=${location}&days=1&aqi=no&alerts=no`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <>
      <div className="container">
        <div className="main">
            <input type='search' onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} className='input' placeholder='Enter location...' />
          <div className="upper">
            {data.location ? <h1 className='city'>{data.location.name}</h1> : null}
            <p>Monday 7:00 AM</p>
          </div>
          <div className="middle">
            {data.current ? <img className='middle-icon' src={data.current.condition.icon} alt="" /> : null}
          
          </div>
          <div className="lower">
            {data.current ? <h2 className='temp'>{data.current.temp_c}°C</h2> : null}
            <p>GOOD MORNING <br />WASIM</p>
          </div>
        </div>
          <div className='line'></div>
        <div className="details">
          <div className="detail">
            <BsSunrise className='detail-icon' />
            {data.forecast ? <p>{data.forecast.forecastday.astro.sunrise}</p> : null}
            <p>7:00</p>
          </div>
          <div className="detail">
            <TbTemperature className='detail-icon' />
            <p>WIND</p>
            <p>4m/s</p>
          </div>
          <div className="detail">
            <FiWind className='detail-icon' />
            <p>TEMPERATURE</p>
            <p>23°</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App