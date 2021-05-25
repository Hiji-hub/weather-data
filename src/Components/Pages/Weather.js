import React, { useState } from 'react'
import { WeaterCard } from './WeatherCard';

function Weather() {
    const [town, setTown] = useState('Самара');
    const [weather, setWeather] = useState([])
    const pathGeo = 'https://geocode-maps.yandex.ru/1.x/?apikey=a6ef40b3-8153-4db2-bad9-af4f931b44b8&format=json&geocode='
    const pathWeather = 'https://api.openweathermap.org/data/2.5/weather?'
    const weatherKey = '&appid=2a1e0fce5a6566ac4963cd9959ab869b&lang=ru'

    const changeHandler = (event) => {
        setTown(event.target.value)
    }

    const getRightPosit = (str) => {
        let posit = 'lat=' + str.slice(str.indexOf(' ')+1, str.length) + '&lon=' + str.slice(0, str.indexOf(' '))
        return posit
    }

    const getWeather = async () => {
        try {
            let response = await fetch(pathGeo+town,{method: 'GET'})
            const data1 = await response.json()
            response = await fetch(pathWeather + getRightPosit(data1['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['Point']['pos'])+weatherKey,{method: 'GET'})
            const data2 = await response.json()
            setWeather(data2)
            console.log(data2)
        } catch(error) {
            console.log('Причина ошибки: ' + error);
        }
    }


    return(
        <div className='container'>
            <div className='content'>
                <h1 style={{textAlign: 'center', fontSize: '50px', margin: '0'}}>
                    ПОГОДА
                </h1>
                <div className='form'>
                    <p  style={{textAlign: 'center', fontSize: '30px'}}>Введите свой город:</p>
                    <input className='town' type='text' onChange={changeHandler} value={town}/>
                    <input className='town-btn' type='submit' onClick={getWeather}/>
                </div>
                <div className='weather-block'>
                    {weather.length===0? '': <WeaterCard weather={weather}/>}
                </div>
            </div>
        </div>
    )
}
//Math.round(weather['main']['temp']-273) + '°C'
export default Weather