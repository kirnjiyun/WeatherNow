import React from "react";
import { useLocWeatherQuery } from "../../hooks/useLocWeather";
import { useCityWeatherQuery } from "../../hooks/useCityWeather";
import useLocation from "../../hooks/useLocation";
import Loading from ".././Loading/Loading";
import styles from "./WeatherStatus.module.css";
import { useRecoilValue } from "recoil";
import { selectedCityState } from "../../atom";
import Location from "../../components/Location/Location";
function CityWeather() {
    const { data, isLoading, isError } = useCityWeatherQuery();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>도시를 찾을 수 없습니다.</div>;
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
            <h2>
                Current Weather in <br />
                <span>{cityName}</span>
            </h2>
            <img
                className={styles.weatherIcon}
                src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
                alt="Weather Icon"
            />
            <p className={styles.temp}>{temperature.toFixed(1)}°C</p>
            <p className={styles.weather}>{weatherDescription}</p>
        </div>
    );
}
function LocWeather() {
    const { loaded, coordinates } = useLocation();
    const { data, isLoading, isError, error } = useLocWeatherQuery(
        coordinates.lat,
        coordinates.lng
    );

    if (!loaded) {
        return <Loading />;
    }

    if (isLoading) {
        return <Loading />;
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
            <h2>
                Current Weather in <br />
                <span>{cityName}</span>
            </h2>
            <img
                className={styles.weatherIcon}
                src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
                alt="Weather Icon"
            />
            <p className={styles.temp}>{temperature.toFixed(1)}°C</p>
            <p className={styles.weather}>{weatherDescription}</p>
            <Location />
        </div>
    );
}

export default function WeatherStatus() {
    const selectedCity = useRecoilValue(selectedCityState);

    return selectedCity ? <CityWeather /> : <LocWeather />;
}
