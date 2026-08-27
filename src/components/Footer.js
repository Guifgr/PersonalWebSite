import React from "react";
import Twenty from '../img/Twenty-One-Pilots-Logo.webp';
import TwentyMini from '../img/Twenty-One-Pilots-LogoMini.webp';

function Footer() {
    const redirect = () => {
        window.location.href = 'https://music.youtube.com/watch?v=IAVy8gI7HOQ&list=OLAK5uy_mvUlZzN1bqUy4Yor4gBVFcobUCezqPVGc';
    };

    return (
        <footer style={footerStyle}>
            <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                <img
                    loading="eager"
                    src={TwentyMini}
                    alt="music"
                    style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "24px",
                        marginRight: "0.5rem",
                    }}
                />
                Feito por{" "}
                <strong style={{ color: "var(--text-primary)" }}>Guilherme Rocha</strong>
                {" "}·{" "}
                {new Date().getFullYear()}
                {" "}·{" "}
                <a
                    href="https://github.com/Guifgr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent-light)" }}
                >
                    GitHub
                </a>
            </p>
            <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
                <span style={{ color: "var(--accent)" }}>⬡</span> Backend Engineer · .NET · Cloud · Self-Hosted
            </p>
            <img
                loading="eager"
                src={Twenty}
                alt="music"
                style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "none",
                    zIndex: 10,
                }}
                onClick={redirect}
                id="topLayers"
            />
        </footer>
    );
}

const footerStyle = {
    backgroundColor: "var(--bg-primary)",
    padding: "2rem 1.5rem",
    borderTop: "1px solid var(--border)",
};

export default Footer;
