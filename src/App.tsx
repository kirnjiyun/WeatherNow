import React from "react";
import styles from "./app.module.css";
import AddModal from "./components/Modal/AddModal";
import ButtonList from "./components/ButtonList/ButtonList";
import WeatherStatus from "./components/WeatherStatus/WeatherStatus";

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <WeatherStatus />
            <ButtonList />
            <AddModal />
        </div>
    );
};

export default App;
