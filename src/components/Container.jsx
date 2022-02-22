import React, { useEffect } from 'react'
import Form from './Form'
import WeatherCol from './WeatherCol'
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
    let sectionStyle = {

    };
    useEffect(() => {
        sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: `url(${imgurl})`
        };
        console.log(imgurl)
    }, [imgurl])

    return (<>
        {
            loading ? <Loader /> :
                <div className={`flex flex-col md:flex md:flex-row md:h-screen w-full flex-wrap bg-cyan-700 bg-cover`} style={{ backgroundImage: `url(${imgurl})` }}>

                    {/* <img src={imgurl} alt="" /> */}
                    {/* left */}
                    <div className="text-black font-bold text-[40px] flex flex-grow p-10 text-center justify-center md:text-left md:justify-start bg-white/10 backdrop-blur">
                        <div className='flex justify-between flex-col p-10'>
                            <h1>Weathered</h1>
                            <div className=''>
                                <h1 className='text-6xl'>{!loading ? weatherData?.list[0]?.main?.temp : " "}° C <br />{!loading ? weatherData?.city?.name : "Unknown"}</h1>
                                {/* <h1 className='text-6xl'>22 ° C <br />Kolkata</h1> */}
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex flex-col flex-auto p4-8 px-6 w-full md:max-w-md  divide-y-2 divide-white bg-white/30 backdrop-blur rounded-md">
                        <Form />
                        <WeatherCol />
                        <NextSeven />
                    </div>
                </div>
        }
    </>
    )
}

export default Container
