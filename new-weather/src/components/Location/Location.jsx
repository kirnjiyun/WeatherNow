import React from "react";
import { useRecoilValue } from "recoil";
import { latState, lonState } from "../../atom";
import useLocation from "../..//hooks/useLocation";

export default function Location() {
    const { loaded } = useLocation();
    const lat = useRecoilValue(latState);
    const lon = useRecoilValue(lonState);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Latitude: {lat.toFixed(2)}
            <br />
            Longitude: {lon.toFixed(2)}
        </div>
    );
}
