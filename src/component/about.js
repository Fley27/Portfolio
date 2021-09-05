import React from "react";
import profile from "..//images/profile.jpeg"
import "../styles/about.css";

const About = () =>{
    return(
        <div className = "about-container">
            <div className = "about-item">
                <div className = "tag tag-h1">{"<h2>"}</div>
                <div className = "about-title">
                    Me, Myself and I
                </div>
                <div className = "tag tag-h1">{"<h2>"}</div>
                <div className = "tag tag-p1">{"<p1>"}</div>
                <div className =  "about-description">
                    I am passionate about technology and since my childhood.  I started coding at a very young age (14 years old), so after high school, I naturally switched to computer engineering.
                </div>
                <div className = "about-description">
                    With several years of experience, I master several programming languages such as Java, C, C#, and Javascript. 
                    But the last one that I mentioned above, JavaScript, is my top skill. It has so many powerful and impressive frameworks and libraries,
                    such as React & NodeJs, that allow us to save a lot of time and also create beautiful and powerful tools, like modern and attractive websites, web and mobile native applications. 
                </div>
                <div className = "tag tag-p1">{"<p1>"}</div>
                <div className = "tag tag-p1">{"<div>"}</div>
                    <div className = "social-media-link-container">
                        <div className = "social-media-link">
                            <i className = "fab fa-github"></i>
                        </div>
                        <div className = "social-media-link">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className = "social-media-link">
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                <div className = "tag tag-p1">{"</div>"}</div>
            </div>
            <div className = "about-item">
                <div className = "image-container">
                    <img 
                        className = "about-image"
                        src = {profile}
                        alt = "profile"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;