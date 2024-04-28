import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { useRecoilValue } from "recoil";
import { latState, lonState } from "../atom";

const fetchLocWeather = async (lat, lon) => {
    const response = await api.get(`/weather?lat=${lat}&lon=${lon}`);
    return response.data;
};

export const useLocWeatherQuery = () => {
    const lat = useRecoilValue(latState);
    const lon = useRecoilValue(lonState);
    return useQuery({
        queryKey: ["weather-location", lat, lon],
        queryFn: () => fetchLocWeather(lat, lon),
        enabled: lat !== 0 && lon !== 0,
    });
};
