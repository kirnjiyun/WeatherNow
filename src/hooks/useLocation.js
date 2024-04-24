import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLocation = () => {
    const fetchLocation = async () => {
        try {
            const response = await axios.post(
                "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"
            );
            const { location } = response.data;
            return {
                lat: location.lat,
                lon: location.lng,
            };
        } catch (error) {
            console.error("Geolocation failed:", error);
            throw error;
        }
    };

    const {
        data: location,
        isLoading,
        error,
    } = useQuery(["location"], fetchLocation);

    if (error) {
        console.error("Geolocation query failed:", error);
    }

    return {
        location,
        isLoading,
    };
};

export default useLocation;
