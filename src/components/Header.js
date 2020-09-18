import React from 'react';
import headerImg from '../img/headerImg.jpg';
import '../index.css';

function Header() {
  return (
    <header style={header}>
      <h1 className="me" style={textStyle}>OLÁ, ME CHAMO GUILHERME</h1>
      <h5 className="about" style={about}>Estudante, DEV e pensador!</h5>
      <svg className="chevrom" style={chevrom}  viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
      <img src={headerImg} alt="server"
      style={ImgStyle}></img>
    </header>
  );
}

const header={
  overflow: "hidden",
  display: "block",
  width: "99,9vw",
  height: "100vh",
  objectFit: "cover",
  borderBottom: "10px solid #0f62fe"
};
const textStyle ={
  marginTop: "30vh",
  marginLeft: "10vw",
  position: "absolute",
  color: "white",
  zIndex: "1",
  fontWeight: '900',
  fontStyle: "italic",
  fontSize: "8em"
};
const about ={
  marginTop: "65vh",
  marginLeft: "10vw",
  position: "absolute",
  color: "white",
  zIndex: "1",
  fontWeight: '900',
  fontStyle: "italic",
  fontSize: "2em"
};
const chevrom={
  marginTop: "90vh",
  left: "50%",
  position:"absolute", 
  msTransform: "translateX(-50%)",
  transform: "translateX(-50%)",
  color: "rgb(255, 255, 255)", 
  zIndex:"1", 
  width: "5vh"
}
const ImgStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
export default Header;
