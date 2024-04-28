import React from "react";
import styles from "./ButtonList.module.css";

const ButtonList = () => {
    const showModal = () => {};
    return (
        <ul>
            <li>
                <button className={styles.button}>Here</button>
            </li>
            <li>
                <button className={styles.button} onClick={showModal}>
                    +
                </button>
            </li>
        </ul>
    );
};

export default ButtonList;
