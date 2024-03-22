import React from "react";
import { useState, useEffect } from "react";

const useWeather = (lat, lon) => {
    const [weather, setWeather] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(false);
    useEffect(() => {
        const getWeatherHere = async () => {
            try {
                setWeatherLoading(true);
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1536a36ef70b7f3dffe4b4a35e3af58`;
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Weather data fetch failed:", error);
            } finally {
                setWeatherLoading(false);
            }
        };

        getWeatherHere();
    }, [lat, lon]);

    return [weather, weatherLoading];
};

export default useWeather;
