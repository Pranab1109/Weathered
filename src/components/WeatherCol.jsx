import React from 'react'
import { useWeather } from '../weatherContext'
const WeatherCol = () => {
    const { city, setCity, weatherData, setWeatherData, getWeatherData } = useWeather()
    return (<>
        {weatherData && <div className="flex flex-col w-full pt-4">
            <h2 className='text-gray-700 text-base font-bold mb-2'>Weather Details</h2>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Temp</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.main?.temp} °C</div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Temp min.</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.main?.temp_min} °C</div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Temp max.</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.main?.temp_max} °C</div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Pressure</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.main?.pressure} hPa</div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Humidity</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.main?.humidity} %</div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-gray-700">Cloudiness</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.clouds?.all} %</div>
            </div>
            <div className="flex justify-between pt-2 pb-4">
                <div className="font-semibold text-gray-700">Wind Speed</div>
                <div className="font-bold text-gray-700">{weatherData?.list[0]?.wind?.speed} m/s</div>
            </div>
        </div>}
    </>
    )
}

export default WeatherCol