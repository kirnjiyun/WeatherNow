import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import Buttons from "./components/Buttons/Buttons";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

export default function App() {
    const cities = ["Chicago", "Paris", "Osaka"];
    const [selectedCity, setSelectedCity] = useState("");
    const handleCityChange = (cityName) => {
        setSelectedCity(cityName);
    };
    const [loading, setLoading] = useState(false);

    return (
        <div className={styles.container}>
            <WeatherInfo selectedCity={selectedCity} setLoading={setLoading} />
            {!loading && (
                <Buttons cities={cities} onCityChange={handleCityChange} />
            )}
        </div>
    );
}
