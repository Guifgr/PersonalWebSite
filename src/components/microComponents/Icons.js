import React from "react"
import InstaLogo from "../../img/instagram.webp"
import LinkedInLogo from "../../img/linkedin.webp"
import gitLogo from "../../img/git.webp"

function Icons(){
    return(
        <div className="icon" style={Icon}>
            <div className="icons" style={iconDiv}>
                <a href="https://github.com/Guifgr">
                    <img loading="lazy" alt="git" className="imgIcon" style={iconImg} src={gitLogo}></img>
                </a>
            </div>
        
            <div className="icons" style={iconDiv}>
                <a href="https://www.linkedin.com/in/guifgr/">
                    <img loading="lazy" alt="linkedin" className="imgIcon" style={iconImg} src={LinkedInLogo}></img>
                </a>
            </div>

            <div className="icons" style={iconDiv}>
                <a href="https://www.instagram.com/guifgr/">
                    <img loading="lazy" alt="insta" className="imgIcon" style={iconImg} src={InstaLogo}></img>
                </a>
            </div>

        </div>
    );
}

const Icon={
    width:"100%",
    display: "flex",
    justifyContent: "center",
    height: "20vh",
    marginTop: "5vh",
    marginBottom: "10vh"
}

const iconDiv={
    display:"block",
    height:"100%",
    width:"20%",
    margin: "10%"
}
const iconImg={
    width:"80%"
}
export default Icons;