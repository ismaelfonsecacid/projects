import { useEffect, useState } from 'react'
import WeatherForm from './weatherForm'
import WeatherMainInfo from './WeatherMainInfo';

export default function Weather() {

    const [weather, setWeather] = useState(null)

    useEffect(() => {   //se ejecuta cada vez que sucede un renderizado o cuando se destruye
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=ed33efce0a564c2e8a674053230407&q=${city}&aqi=no`
            );

            const json = await request.json()
            setWeather(json);
        } catch (error) {

        }
    }
    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city);
    }


    return (
        <div className='flex flex-col'>
            <div className=''>
                <WeatherForm onChangeCity={handleChangeCity}/>
            </div>
            <div className='mt-6 pt-6 border border-black rounded-md bg-gray-50'>
                <WeatherMainInfo weather={weather}/>
            </div>
        </div>
    )
}