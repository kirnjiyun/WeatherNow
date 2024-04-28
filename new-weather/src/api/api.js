import axios from "axios";

const API_KEY = "c1536a36ef70b7f3dffe4b4a35e3af58";

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        appid: API_KEY,
        units: "metric",
    },
    headers: {
        Accept: "application/json",
    },
});

export default api;
