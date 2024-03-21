import React from "react";
import styles from "./weatherInfo.module.css";
import useLocation from "./useLocation";
import useWeather from "./useWeather";
const WeatherInfo = () => {
    const { lat, lon } = useLocation();
    const weather = useWeather(lat, lon);
    const iconCode = weather?.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

    return (
        <div className={styles.container}>
            {weather && (
                <>
                    <h1 className={styles.cityName}>{weather.name}</h1>
                    <img
                        className={styles.weatherIcon}
                        src={iconUrl}
                        alt="Weather icon"
                    />
                    <h3 className={styles.temp}>
                        {Math.floor(weather.main.temp - 273.15)}°C
                    </h3>
                    <h3 className={styles.weather}>
                        {weather.weather[0].description}
                    </h3>
                </>
            )}
            <div className={styles.location}>
                <p>Latitude: {lat.toFixed(3)}</p>
                <p>Longitude: {lon.toFixed(3)}</p>
            </div>
        </div>
    );
};

export default WeatherInfo;
