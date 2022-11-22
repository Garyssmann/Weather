import React from 'react';
import axios from "axios";

const GetWeather = ({cityName,setWeather,setCityName}) => {
    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bb5cea218e1d861dd4bad3a0afdd54b8`)
            .then(({data}) => setWeather(data))
    };
    return (
        <>
            <input className='form__input' placeholder='Write city name' type="text"
                   onChange={(event) => setCityName(event.target.value)}/>
            <button className='form__btn' type='button' onClick={() => getWeather()}>Получить</button>
        </>
    );
};

export default GetWeather;