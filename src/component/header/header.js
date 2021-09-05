import React from "react";
import Nav from "./nav";
import Skill from "../skill";
import About from "../about";
import Contact from "../contact";
import "../../styles/header.css";

const Header = () => {
    return(
        <div className = "header-container">
            <Nav/>
            <div className = "header">
                <div className = "tag tag-html">{"</html>"}</div>
                <div className = "tag tag-body">{"<body>"}</div>
                <div className = "text-zone-container">
                    <div className = "tag tag-h1">{"<h1>"}</div>
                    <div className = "text-zone">
                        <div className = "hi">Hi,</div><br/> 
                        <div className = "my-name">I am <span className = "important">Fenley,</span></div>
                        <br/>
                        <div className = "my-profession"><span className = "important_">Mern Stack</span> Developer</div>
                        <span className = "tag tag-h1">{"</h1>"}</span>
                    </div>
                    <div className = "tag tag-p1">{"<p1>"}</div>
                    <div className = "pro-title">
                        Web & Mobile Developer / Mongodb Expert
                    </div>
                    <div className = "tag tag-p1">{"</p1>"}</div>
                    <div className = "button-header-container">
                        <button className = "button-header-contact">
                            Hire me!
                        </button>
                    </div>
                </div>
                <div className = "overlay"></div>
            </div>
            <Skill/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Header;