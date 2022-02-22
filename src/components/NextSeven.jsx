import React from 'react'
import { useWeather } from '../weatherContext'

const NextSeven = () => {
    const { city, setCity, weatherData, setWeatherData, getWeatherData } = useWeather()
    // next_seven_data = weatherData.list[0]
    // console.log(next_seven_data)

    return (<>
        {weatherData && <div className="flex flex-col w-full pt-4">
            <h2 className='text-gray-900 text-base font-bold mb-2'>Next Seven Days</h2>
            {weatherData?.list?.map((element, i) => {
                if (i === 0) return null;
                return <div key={element.dt} className="flex justify-between pt-2">
                    <div className="font-semibold text-gray-900"> {element.dt_txt.split(" ")[0]}</div>
                    <img className='h-8 w-8' src={`http://openweathermap.org/img/w/${element.weather[0]?.icon}.png`} alt="" />
                    <div className="w-16 font-bold text-gray-900">{element.main.temp} °C</div>
                </div>

            })}
        </div>}
    </>
    )
}

export default NextSeven