import React from "react";
import { useState, useEffect } from "react";

const useWeather = (lat, lon) => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const getWeatherHere = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1536a36ef70b7f3dffe4b4a35e3af58`;
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
                console.log(data);
                console.log(data.weather[0].id);
            } catch (error) {
                console.error("Weather data fetch failed:", error);
            }
        };

        getWeatherHere();
    }, [lat, lon]);

    return weather;
};

export default useWeather;
