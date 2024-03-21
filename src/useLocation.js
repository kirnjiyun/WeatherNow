import React from "react";
import { useState, useEffect } from "react";

const useLocation = () => {
    const [location, setLocation] = useState({ lat: 0, lon: 0 });

    useEffect(() => {
        const getCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    setLocation({ lat, lon });
                },
                (error) => {
                    console.error("Geolocation failed:", error);
                }
            );
        };
        getCurrentLocation();
    }, []);

    return location;
};
export default useLocation;
