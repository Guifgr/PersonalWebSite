import React from "react";

function SpacedText(props) {
    return (
        <h6 style={{
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            color: "var(--accent-light)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
        }}>
            {props.text}
        </h6>
    );
}

export default SpacedText;
