import React from "react";
import styles from "./app.module.css";
import Buttons from "./Buttons";
import WeatherInfo from "./WeatherInfo";

export default function App() {
    const cities = ["Chicago", "Paris", "Osaka"];
    return (
        <div className={styles.container}>
            <WeatherInfo />
            <Buttons cities={cities} />
        </div>
    );
}
