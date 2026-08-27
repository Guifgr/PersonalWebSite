import React from "react";
import headerImg from "../img/headerImg.webp";
import "../index.css";

function Header() {
    return (
        <header style={header}>
            <div style={overlay}></div>
            <img
                loading="eager"
                src={headerImg}
                alt="background"
                style={ImgStyle}
            ></img>
            <div style={contentWrapper}>
                <div style={badgeRow}>
                </div>
                <h1 style={textStyle}>
                    <span style={line1}>GUILHERME</span>
                    <br />
                    <span style={line2}>ROCHA</span>
                </h1>
                <h5 style={about}>
                    Software Engineer · Backend .NET · Cloud & Event-Driven Systems
                </h5>
                <div style={metaRow}>
                    <span style={metaItem}>
                        <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor" style={{marginRight: '6px'}}>
                            <path d="M172.3 501.7c-4.2 4.2-4.2 10.9 0 15.1l91.5 91.5c4.2 4.2 10.9 4.2 15.1 0l91.5-91.5c4.2-4.2 4.2-10.9 0-15.1l-91.5-91.5c-4.2-4.2-10.9-4.2-15.1 0L172.3 501.7zm294.8-275.4l-91.5 91.5c-4.2 4.2-4.2 10.9 0 15.1l91.5 91.5c4.2 4.2 10.9 4.2 15.1 0l91.5-91.5c4.2-4.2 4.2-10.9 0-15.1l-91.5-91.5c-4.2-4.2-10.9-4.2-15.1 0zM172.3 128.3c-4.2 4.2-4.2 10.9 0 15.1l91.5 91.5c4.2 4.2 10.9 4.2 15.1 0l91.5-91.5c4.2-4.2 4.2-10.9 0-15.1l-91.5-91.5c-4.2-4.2-10.9-4.2-15.1 0L172.3 128.3zM0 192c0-35.3 28.7-64 64-64h64 64c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192z"/>
                        </svg>
                        Mogi das Cruzes, SP
                    </span>
                    <span style={dot}>·</span>
                    <span style={metaItem}>
                        <svg width="14" height="14" viewBox="0 0 496 512" fill="currentColor" style={{marginRight: '6px'}}>
                            <path d="M336 318.2c30.9-17.4 53.6-48.6 60.8-84.2H496L368 192 240 320h56c-7.2 35.6-29.9 66.8-60.8 84.2-24.5 13.8-40 40.2-40 69.8 0 46.3 37.7 84 84 84s84-37.7 84-84c0-29.6-15.5-56-40-69.8zM224 112c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm128 32c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM88 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 23.1-5.5 45-15.1 64.8C348.8 295.8 337 320 320 320H200c-17 0-28.8-24.2-16.9-39.2C173.5 269 168 247.1 168 224c0-53-43-96-96-96S0 171 0 224c0 35.3 28.7 64 64 64h24c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-26.5 0-48-21.5-48-48 0-26.5 21.5-48 48-48h24z"/>
                        </svg>
                        ITAÚ UNIBANCO
                    </span>
                </div>
                <div style={ctaRow}>
                    <a href="#projetos" style={ctaPrimary}>Ver Projetos</a>
                    <a href="#contato" style={ctaSecondary}>Entrar em Contato</a>
                </div>
            </div>
            <svg
                className="chevrom"
                style={chevrom}
                viewBox="0 0 320 512"
                data-fa-i2svg=""
            >
                <path
                    fill="currentColor"
                    d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
                ></path>
            </svg>
        </header>
    );
}

const header = {
    overflow: "hidden",
    display: "block",
    width: "99.9vw",
    height: "100vh",
    objectFit: "cover",
    position: "relative",
};

const overlay = {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
    zIndex: 1,
};

const ImgStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
};

const contentWrapper = {
    position: "absolute",
    zIndex: 2,
    top: 0, left: 0, right: 0, bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 10vw",
};

const badgeRow = {
    marginBottom: "1.5rem",
};

const badge = {
    display: "inline-block",
    background: "rgba(15,98,254,0.25)",
    border: "1px solid rgba(15,98,254,0.6)",
    borderRadius: "20px",
    padding: "0.35rem 1rem",
    fontSize: "0.8rem",
    color: "#4589ff",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.05em",
};

const textStyle = {
    fontWeight: 900,
    fontStyle: "normal",
    lineHeight: 1,
    marginBottom: "1.5rem",
};

const line1 = {
    fontSize: "clamp(3rem, 8vw, 7rem)",
    color: "#ffffff",
    display: "block",
    letterSpacing: "-0.02em",
};

const line2 = {
    fontSize: "clamp(3rem, 8vw, 7rem)",
    color: "#0f62fe",
    display: "block",
    letterSpacing: "-0.02em",
};

const about = {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "1.5rem",
    letterSpacing: "0.01em",
};

const metaRow = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
};

const metaItem = {
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    fontFamily: "var(--font-mono)",
};

const dot = {
    color: "rgba(255,255,255,0.3)",
};

const ctaRow = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
};

const ctaPrimary = {
    padding: "0.75rem 2rem",
    backgroundColor: "#0f62fe",
    color: "#fff",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "background-color 0.2s ease",
    display: "inline-block",
};

const ctaSecondary = {
    padding: "0.75rem 2rem",
    backgroundColor: "transparent",
    color: "#fff",
    borderRadius: "6px",
    border: "1px solid rgba(255,255,255,0.3)",
    fontWeight: 500,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "border-color 0.2s ease",
    display: "inline-block",
};

const chevrom = {
    position: "absolute",
    bottom: "8vh",
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,0.5)",
    zIndex: 2,
    width: "3vh",
    animation: "bounce 2s infinite",
};

export default Header;
