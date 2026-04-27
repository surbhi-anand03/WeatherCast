import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhubaneswar",
        feelslike: 32.07,
        humidity: 65,
        temp: 29.12,
        tempMax: 29.12,
        tempMin: 28.32,
        weather: "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>WeatherCast</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}