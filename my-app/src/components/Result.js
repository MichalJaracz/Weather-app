import React from 'react';
import './Result.css'

const Result = props => {

    const { err, city, sunrise, sunset, temp, pressure, wind, date } = props.weather
    
    let content = null;
    
    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <React.Fragment>
                <h2>Wyszukiwanie dla miasta: <em>{city}</em></h2>
                <h3>Dane dla dnia i godziny: {date}</h3>  
                <h3>Aktualna temperatura: {temp}</h3> 
                <h3>Wschód słońca dzisiaj o: {sunriseTime}</h3> 
                <h3>Zachód słońca dzisiaj o: {sunsetTime}</h3>
                <h3>Aktualna siła wiatru: {wind} m/s</h3>
                <h3>Aktualne ciśnienie: {pressure} hPa</h3>
            </React.Fragment>
        )
    }

    return( 
        <div className="result">
            {err ? `Nie mamy w bazie: ${city}` : content}
        </div>
     );
}

export default Result;