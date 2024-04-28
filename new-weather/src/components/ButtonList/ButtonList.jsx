import React from "react";
import { useSetRecoilState } from "recoil";
import styles from "./ButtonList.module.css";
import { modalOpenState } from "../../atom";

const ButtonList = () => {
    const setOpenModal = useSetRecoilState(modalOpenState);
    const openModal = () => {
        setOpenModal(true);
    };

    return (
        <ul>
            <li>
                <button className={styles.button}>Here</button>
            </li>
            <li>
                <button className={styles.button} onClick={openModal}>
                    +
                </button>
            </li>
        </ul>
    );
};

export default ButtonList;
