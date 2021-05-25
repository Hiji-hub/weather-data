import React from 'react'

export const WeaterCard = (props) => {
    return(
        <div className='weather-card'>
            <div className='weather-text'>
                <h2>{Math.round(props.weather['main']['temp']-273) + '°C'}</h2>
                <h3>{props.weather['weather'][0]['description']}</h3>
            </div>
            <img src={'https://openweathermap.org/img/wn/'+props.weather['weather'][0]['icon']+'@2x.png'} alt='weather-icon'></img>
        </div>
    )
}