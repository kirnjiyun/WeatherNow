import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import api from "../api/api";
import { selectedCityState } from "../atom";
import { AxiosResponse } from "axios";

interface WeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: any[];
    wind: {
        speed: number;
        deg: number;
    };
}

const fetchCityWeather = async (
    selectedCity: string | null
): Promise<WeatherData> => {
    const response: AxiosResponse<WeatherData> = await api.get(
        `/weather?q=${selectedCity}&`
    );
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
