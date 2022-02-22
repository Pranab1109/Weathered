import React, { useState, useContext } from "react";
import axios from "axios";
const WeatherContext = React.createContext()
export function useWeather() {
    return useContext(WeatherContext)
}
export function WeatherProvider({ children }) {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('Kolkata');
    const [weatherData, setWeatherData] = useState({});
    const [imgurl, setImgUrl] = useState('')
    function getWeatherData() {
        setLoading(true)
        console.log("FETCHING")
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=5e1bec9aa03f1085e0c32f6baf4d9717`).then((response) => {
            setWeatherData(response.data)
            console.log(response.data)
            setLoading(false)
            setImgUrl('')
            console.log(response.data.list[0])
            axios.get(`https://api.unsplash.com/photos/random/?query=${response.data.list[0].weather[0].description}&orientation=landscape&color=blue&client_id=n4khgACVFzAgky5uxTVIxzJL7OncK0YQZT0kMhJ02d4`).then((res) => {
                setImgUrl(res.data.urls.full)
            })
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })

    }
    // getWeatherData()
    return (
        <WeatherContext.Provider value={{ loading, setLoading, city, setCity, weatherData, setWeatherData, imgurl, getWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}


// setWeatherData({
        //     "cod": "200",
        //     "message": 0,
        //     "cnt": 8,
        //     "list": [
        //         {
        //             "dt": 1645466400,
        //             "main": {
        //                 "temp": 21.98,
        //                 "feels_like": 21.57,
        //                 "temp_min": 19.99,
        //                 "temp_max": 21.98,
        //                 "pressure": 1010,
        //                 "sea_level": 1010,
        //                 "grnd_level": 1010,
        //                 "humidity": 51,
        //                 "temp_kf": 1.99
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01n"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 2
        //             },
        //             "wind": {
        //                 "speed": 1.79,
        //                 "deg": 156,
        //                 "gust": 2.25
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "n"
        //             },
        //             "dt_txt": "2022-02-21 18:00:00"
        //         },
        //         {
        //             "dt": 1645477200,
        //             "main": {
        //                 "temp": 20.24,
        //                 "feels_like": 19.81,
        //                 "temp_min": 18.88,
        //                 "temp_max": 20.24,
        //                 "pressure": 1010,
        //                 "sea_level": 1010,
        //                 "grnd_level": 1009,
        //                 "humidity": 57,
        //                 "temp_kf": 1.36
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01n"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 1
        //             },
        //             "wind": {
        //                 "speed": 0.98,
        //                 "deg": 55,
        //                 "gust": 1.32
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "n"
        //             },
        //             "dt_txt": "2022-02-21 21:00:00"
        //         },
        //         {
        //             "dt": 1645488000,
        //             "main": {
        //                 "temp": 18.28,
        //                 "feels_like": 17.86,
        //                 "temp_min": 18.28,
        //                 "temp_max": 18.28,
        //                 "pressure": 1011,
        //                 "sea_level": 1011,
        //                 "grnd_level": 1010,
        //                 "humidity": 65,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01n"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 2.11,
        //                 "deg": 115,
        //                 "gust": 2.33
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "n"
        //             },
        //             "dt_txt": "2022-02-22 00:00:00"
        //         },
        //         {
        //             "dt": 1645498800,
        //             "main": {
        //                 "temp": 23.81,
        //                 "feels_like": 23.58,
        //                 "temp_min": 23.81,
        //                 "temp_max": 23.81,
        //                 "pressure": 1014,
        //                 "sea_level": 1014,
        //                 "grnd_level": 1013,
        //                 "humidity": 51,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01d"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 2.94,
        //                 "deg": 151,
        //                 "gust": 4.06
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "d"
        //             },
        //             "dt_txt": "2022-02-22 03:00:00"
        //         },
        //         {
        //             "dt": 1645509600,
        //             "main": {
        //                 "temp": 28.85,
        //                 "feels_like": 28.06,
        //                 "temp_min": 28.85,
        //                 "temp_max": 28.85,
        //                 "pressure": 1013,
        //                 "sea_level": 1013,
        //                 "grnd_level": 1012,
        //                 "humidity": 35,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01d"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 3.29,
        //                 "deg": 196,
        //                 "gust": 3.45
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "d"
        //             },
        //             "dt_txt": "2022-02-22 06:00:00"
        //         },
        //         {
        //             "dt": 1645520400,
        //             "main": {
        //                 "temp": 31.02,
        //                 "feels_like": 29.1,
        //                 "temp_min": 31.02,
        //                 "temp_max": 31.02,
        //                 "pressure": 1010,
        //                 "sea_level": 1010,
        //                 "grnd_level": 1009,
        //                 "humidity": 20,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01d"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 3.79,
        //                 "deg": 257,
        //                 "gust": 4.21
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "d"
        //             },
        //             "dt_txt": "2022-02-22 09:00:00"
        //         },
        //         {
        //             "dt": 1645531200,
        //             "main": {
        //                 "temp": 26.64,
        //                 "feels_like": 26.64,
        //                 "temp_min": 26.64,
        //                 "temp_max": 26.64,
        //                 "pressure": 1011,
        //                 "sea_level": 1011,
        //                 "grnd_level": 1010,
        //                 "humidity": 27,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01d"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 3.67,
        //                 "deg": 288,
        //                 "gust": 4.99
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "d"
        //             },
        //             "dt_txt": "2022-02-22 12:00:00"
        //         },
        //         {
        //             "dt": 1645542000,
        //             "main": {
        //                 "temp": 22.31,
        //                 "feels_like": 21.88,
        //                 "temp_min": 22.31,
        //                 "temp_max": 22.31,
        //                 "pressure": 1014,
        //                 "sea_level": 1014,
        //                 "grnd_level": 1013,
        //                 "humidity": 49,
        //                 "temp_kf": 0
        //             },
        //             "weather": [
        //                 {
        //                     "id": 800,
        //                     "main": "Clear",
        //                     "description": "clear sky",
        //                     "icon": "01n"
        //                 }
        //             ],
        //             "clouds": {
        //                 "all": 0
        //             },
        //             "wind": {
        //                 "speed": 1.55,
        //                 "deg": 210,
        //                 "gust": 3.29
        //             },
        //             "visibility": 10000,
        //             "pop": 0,
        //             "sys": {
        //                 "pod": "n"
        //             },
        //             "dt_txt": "2022-02-22 15:00:00"
        //         }
        //     ],
        //     "city": {
        //         "id": 1275004,
        //         "name": "Kolkata",
        //         "coord": {
        //             "lat": 22.5697,
        //             "lon": 88.3697
        //         },
        //         "country": "IN",
        //         "population": 4631392,
        //         "timezone": 19800,
        //         "sunrise": 1645403678,
        //         "sunset": 1645445164
        //     }
        // })