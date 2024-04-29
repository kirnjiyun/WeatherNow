import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { latState, lonState } from "../atom";

const useLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
    });

    const setLat = useSetRecoilState(latState);
    const setLon = useSetRecoilState(lonState);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        loaded: true,
                        coordinates: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                    });
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                },
                (error) => {
                    console.error(error);
                    setLocation((prevState) => ({
                        ...prevState,
                        loaded: true,
                    }));
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLocation((prevState) => ({
                ...prevState,
                loaded: true,
            }));
        }
    }, [setLat, setLon]);

    return location;
};
export default useLocation;
