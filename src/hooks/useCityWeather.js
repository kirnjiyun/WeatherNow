import React from "react";
import { useState, useEffect } from "react";

const useCityWeather = (selectedCity) => {
    const [cityWeather, setCityWeather] = useState(null);
    const [cityLoading, setCityLoading] = useState(false);
    useEffect(() => {
        if (!selectedCity) {
            console.log("유효하지 않은 도시 이름입니다.");
            return;
        }

        const getCityWeather = async () => {
            try {
                setCityLoading(true);
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=c1536a36ef70b7f3dffe4b4a35e3af58`;
                const response = await fetch(url);
                const data = await response.json();
                setCityWeather(data);
            } catch (error) {
                console.error("CityWeather data fetch failed:", error);
            } finally {
                setCityLoading(false);
            }
        };

        getCityWeather();
    }, [selectedCity]);

    return [cityWeather, cityLoading];
};

export default useCityWeather;
