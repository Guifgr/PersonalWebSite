import React from "react";
import euzinho from "../../img/euzinho.webp";

function Picture() {
    return (
        <div
            className="half"
            style={{ float: "Right", marginRight: "15%", width: "34.5%" }}
        >
            <img
                alt="Guilherme Fernandes Gomes da Rocha"
                src={euzinho}
                style={{ width: "100%" }}
            ></img>
        </div>
    );
}

export default Picture;
