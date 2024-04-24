import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCityWeather = (selectedCity) => {
    const fetchCityWeather = async () => {
        if (!selectedCity) {
            throw new Error("유효하지 않은 도시 이름입니다.");
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=c1536a36ef70b7f3dffe4b4a35e3af58`;
        const response = await axios.get(url);
        return response.data;
    };

    const {
        data: cityWeather,
        isLoading: cityLoading,
        error,
    } = useQuery(["cityWeather", selectedCity], fetchCityWeather, {
        enabled: !!selectedCity,
    });

    if (error) {
        console.error("CityWeather data fetch failed:", error);
    }

    return [cityWeather, cityLoading];
};

export default useCityWeather;
