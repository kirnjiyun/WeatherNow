import React from "react";
import styles from "./buttons.module.css";

const Buttons = ({ cities, onCityChange }) => {
    const nameCity = (cityName) => () => {
        onCityChange(cityName);
    };

    return (
        <ul>
            <li>
                <button className={styles.button} onClick={nameCity(null)}>
                    Here
                </button>
            </li>
            {cities.map((cityName, index) => (
                <li key={index}>
                    <button
                        className={styles.button}
                        onClick={nameCity(cityName)}
                    >
                        {cityName}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Buttons;
