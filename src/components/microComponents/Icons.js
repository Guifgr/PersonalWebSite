import React from "react";
import linkedin from "../../img/linkedin.webp";
import instagram from "../../img/instagram.webp";
import git from "../../img/git.webp";

function Icons() {
    return (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <a href="https://github.com/Guifgr" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="GitHub" style={{ width: "28px", height: "28px" }} />
            </a>
            <a href="https://www.linkedin.com/in/guifgr/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{ width: "28px", height: "28px" }} />
            </a>
            <a href="https://www.instagram.com/guifgr/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" style={{ width: "28px", height: "28px" }} />
            </a>
        </div>
    );
}

export default Icons;
