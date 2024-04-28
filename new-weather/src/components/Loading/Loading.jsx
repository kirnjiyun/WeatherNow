import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <ReactLoading type="spin" color="#000" height={100} width={100} />
        </div>
    );
}
