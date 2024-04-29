// Location.jsx
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { latState, lonState } from "../../atom";
import useLocation from "../../hooks/useLocation";
import Loading from "../Loading/Loading";
import styles from "./Location.module.css";

export default function Location() {
    const { loaded } = useLocation();
    const lat = useRecoilValue(latState);
    const lon = useRecoilValue(lonState);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (loaded) {
            setIsLoaded(true);
        }
    }, [loaded]);

    if (!isLoaded) {
        return <Loading />;
    }

    return (
        <div className={styles.LocationContainer}>
            (Latitude: {lat.toFixed(1)}, Longitude: {lon.toFixed(1)})
        </div>
    );
}
