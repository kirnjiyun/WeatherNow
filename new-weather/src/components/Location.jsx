import React from "react";
import useLocation from "../hooks/useLocation";

export default function Location() {
    const { location, isLoading } = useLocation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Latitude: {location.lat.toFixed(2)}
            <br />
            Longitude: {location.lng.toFixed(2)}
        </div>
    );
}
