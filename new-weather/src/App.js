import React from "react";
import styles from "./app.module.css";
import Location from "./components/Location/Location";
import AddModal from "./components/Modal/AddModal";
import ButtonList from "./components/ButtonList/ButtonList";
import WeatherStatus from "./components/WeatherStatus/WeatherStatus";

export default function App() {
    return (
        <div className={styles.container}>
            <div>
                <WeatherStatus />
            </div>
            <h1>
                <Location />
            </h1>
            <div>
                <ButtonList />
            </div>
            <AddModal />
        </div>
    );
}
