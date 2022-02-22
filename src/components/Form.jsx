import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { useWeather } from '../weatherContext'
const Form = () => {
    const { city, setCity, weatherData, setWeatherData, getWeatherData } = useWeather()
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(tempCity)
        console.log(city)
        getWeatherData()
    }
    let tempCity = ""
    const onChange = (e) => {
        tempCity = e.target.value
    }
    return (
        <form noValidate
            onSubmit={handleSubmit}
            className='flex flex-col justify-center w-full rounded h-[100px] '>
            <label className="block text-gray-900 text-base font-bold mb-2" htmlFor="username">
                Location
            </label>
            <div className="flex">
                <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900  focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Location" />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                    <i className="fa fa-search text-sm"></i>
                </button>
            </div>
        </form>
    )
}

export default Form