import React, { useEffect } from "react";
import styles from "./weatherInfo.module.css";
import useLocation from "../../hooks/useLocation";
import useWeather from "../../hooks/useWeather";
import useCityWeather from "../../hooks/useCityWeather";
import { ClipLoader } from "react-spinners";

const WeatherInfo = ({ selectedCity, setLoading }) => {
    const { lat, lon } = useLocation();
    const [weather, weatherLoading] = useWeather(lat, lon);
    const [city, cityLoading] = useCityWeather(selectedCity);

    const loading = cityLoading || weatherLoading;

    useEffect(() => {
        setLoading(loading);
    }, [loading, setLoading]);

    const currentWeather = selectedCity ? city : weather;
    const weatherInfoExists =
        currentWeather &&
        currentWeather.weather &&
        currentWeather.weather.length > 0;
    const iconCode = weatherInfoExists ? currentWeather.weather[0].icon : "";
    const iconUrl = iconCode
        ? `http://openweathermap.org/img/wn/${iconCode}@4x.png`
        : "";

    if (loading) {
        return (
            <div className={styles.container}>
                <ClipLoader color="#383f54" size={200} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {currentWeather && (
                <>
                    <h1 className={styles.cityName}>{currentWeather.name}</h1>
                    <img
                        className={styles.weatherIcon}
                        src={iconUrl}
                        alt="Weather icon"
                    />
                    <h3 className={styles.temp}>
                        {Math.floor(currentWeather.main.temp - 273.15)}°C
                    </h3>
                    <h3 className={styles.weather}>
                        {currentWeather.weather[0].description}
                    </h3>
                </>
            )}
        </div>
    );
};

export default WeatherInfo;
