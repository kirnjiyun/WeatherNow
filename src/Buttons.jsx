import React from "react";
import styles from "./buttons.module.css";

const Buttons = ({ cities }) => {
    console.log(cities);
    return (
        <ul>
            <li>
                <button className={styles.button}>Here</button>
            </li>
            {cities.map((city, index) => (
                <li key={(city, index)}>
                    <button className={styles.button}>{city}</button>
                </li>
            ))}
        </ul>
    );
};

export default Buttons;
