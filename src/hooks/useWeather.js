import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWeather = (lat, lon) => {
    const fetchWeather = async () => {
        if (!lat || !lon) {
            throw new Error("유효하지 않은 위치 정보입니다.");
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1536a36ef70b7f3dffe4b4a35e3af58`;
        const response = await axios.get(url);
        return response.data;
    };

    const {
        data: weather,
        isLoading: weatherLoading,
        error,
    } = useQuery(["weather", lat, lon], fetchWeather, {
        enabled: !!lat && !!lon,
    });

    if (error) {
        console.error("Weather data fetch failed:", error);
    }

    return [weather, weatherLoading];
};

export default useWeather;
