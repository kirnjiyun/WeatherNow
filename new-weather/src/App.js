import React from "react";
import styles from "./app.module.css";
import Location from "./components/Location";
import WeatherStatus from "./components/WeatherStatus";
import ButtonList from "./components/ButtonList";
export default function App() {
    return (
        <div className={styles.container}>
            <h1>
                <Location />
            </h1>
            <div>
                <WeatherStatus />
            </div>
            <div>
                <ButtonList />
            </div>
        </div>
    );
}
