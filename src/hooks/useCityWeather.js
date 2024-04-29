import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import api from "../api/api";
import { selectedCityState } from "../atom";

const fetchCityWeather = async (selectedCity) => {
    const response = await api.get(`/weather?q=${selectedCity}&`);
    return response.data;
};

export const useCityWeatherQuery = () => {
    const selectedCity = useRecoilValue(selectedCityState);

    return useQuery({
        queryKey: ["weather-city", { selectedCity }],
        queryFn: () => fetchCityWeather(selectedCity),
        enabled: selectedCity !== null,
    });
};
