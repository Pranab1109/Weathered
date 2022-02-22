import React, { useEffect } from 'react'
import Form from './Form'
import WeatherCol from './WeatherCol'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import NextSeven from './NextSeven'
import { useWeather } from '../weatherContext'
import Loader from './Loader'
const Container = () => {
    // const { city, setCity, weatherData, setWeatherData } = useWeather()
    const { loading, city, setCity, weatherData, imgurl, getWeatherData } = useWeather()

    useEffect(() => {
        setCity('Kolkata')
    }, [])

    useEffect(() => {
        getWeatherData()
    }, [city])


    return (<>
        {
            loading ? <Loader /> :
                <div className={`flex flex-col md:flex md:flex-row md:h-screen w-full flex-wrap bg-cyan-700 bg-cover`} style={{ backgroundImage: `url(${imgurl})` }}>
                    {/* left */}
                    <div className="text-black font-bold text-[40px] flex flex-col md:flex-row flex-grow p-10 text-center justify-center md:text-left md:justify-between bg-white/10 backdrop-blur">
                        <div className='flex justify-between flex-col p-10'>
                            <h1>Weathered</h1>
                            <div className=''>
                                <h1 className='text-6xl'>{weatherData?.list[0]?.main?.temp}° C <br />{weatherData?.city?.name}</h1>
                            </div>
                        </div>
                        <div className="flex p-10">
                            <img className='h-14 w-14' src={`http://openweathermap.org/img/w/${weatherData?.list[0]?.weather[0]?.icon}.png`} alt="" />
                            <p className='font-semibold text-[28px]'>{weatherData?.list[0]?.weather[0]?.description}</p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex flex-col flex-auto p4-8 px-6 w-full xl:max-w-lg divide-y-2 divide-white bg-white/30 backdrop-blur rounded-md">
                        <div className="py-4">
                            <Form />
                        </div>
                        <WeatherCol />
                        <NextSeven />
                    </div>
                </div>
        }
    </>
    )
}

export default Container
