import React from "react";

function BigText(props) {
    return (
        <h5 style={{
            marginBottom: props.marginBottom,
            marginTop: "1vh",
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontWeight: 700,
            color: props.color
        }}>
            {props.text}
        </h5>
    );
}

export default BigText;
