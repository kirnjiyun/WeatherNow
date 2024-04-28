import React from "react";
import { useLocWeatherQuery } from "../../hooks/useLocWeather";
import Loading from ".././Loading/Loading";
import styles from "./WeatherStatus.module.css";

export default function WeatherStatus() {
    const { data, isLoading, isError, error } = useLocWeatherQuery();
    console.log("weather", data);

    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Loading />
            </div>
        );
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (!data) {
        return null;
    }

    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const cityName = data.name;

    return (
        <div className={styles.statusContainer}>
            <h2>Current Weather in {cityName}</h2>
            <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
                alt="Weather Icon"
            />
            <p>Temperature: {temperature}°C</p>
            <p>Description: {weatherDescription}</p>
        </div>
    );
}
