import { useState, useEffect } from "react";

const useLocation = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setLocation({ lat, lng });
                setIsLoading(false);
            },
            (error) => {
                console.error("Geolocation failed:", error);
                setIsLoading(false);
            }
        );
    }, []);

    return { location, isLoading };
};

export default useLocation;
