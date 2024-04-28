<<<<<<< HEAD
// ButtonList.js
import React from "react";
import { useSetRecoilState } from "recoil";
import styles from "./ButtonList.module.css";
import { modalOpenState } from "../atom";

const ButtonList = () => {
    const setOpenModal = useSetRecoilState(modalOpenState);
    const openModal = () => {
        setOpenModal(true);
    };

=======
import React from "react";
import styles from "./ButtonList.module.css";

const ButtonList = () => {
    const showModal = () => {};
>>>>>>> d12a1d9e5b6822ddb8580542f187508b7ee01e82
    return (
        <ul>
            <li>
                <button className={styles.button}>Here</button>
            </li>
            <li>
<<<<<<< HEAD
                <button className={styles.button} onClick={openModal}>
=======
                <button className={styles.button} onClick={showModal}>
>>>>>>> d12a1d9e5b6822ddb8580542f187508b7ee01e82
                    +
                </button>
            </li>
        </ul>
    );
};

export default ButtonList;
