import React from "react";
import euImg from "../../img/eu.webp";

function Picture() {
    return (
        <div
            className="half"
            style={{
                float: "right",
                marginRight: "15%",
                width: "34.5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "1rem",
            }}
        >
            <img
                src={euImg}
                alt="Guilherme Rocha"
                style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "12px",
                    border: "2px solid var(--border)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
            />
        </div>
    );
}

export default Picture;
