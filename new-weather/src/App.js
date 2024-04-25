import React from "react";
import styles from "./app.module.css";
import Location from "./components/Location";
export default function App() {
    return (
        <div className={styles.container}>
            <h1>
                <Location />
            </h1>
            <div>날씨 아이콘</div>
            <>buttonlist</>
        </div>
    );
}
