import React from "react";
import "../styles/about.css";

const About = (props) =>{
    
    return(
        <div className = {`about-container container ${props.dark ? ` dark-mode` : ``}`}>
            <div className = "about-item">
                <div className = "work-title">
                    <div>Me, Myself and I</div>
                </div>
                <div className = "work-description">
                    I am passionate about technology and since my childhood.  I started coding at a very young age (14 years old), so after high school, I naturally switched to computer engineering. <br/>
                    With several years of experience, I master several programming languages such as Java, C, C#, and Javascript. 
                    But the last one that I mentioned above, JavaScript, is my top skill. It has so many powerful and impressive frameworks and libraries,
                    such as React & NodeJs, that allow us to save a lot of time and also create beautiful and powerful tools, like modern and attractive websites, web and mobile native applications. 
                    <br/>
                    Each project is an act of commitment to myself and you to meet your needs. However, together we will create the tool that suits best your business or your idea.<br/>

                    I will consider every detail that you share with me, discuss them, and, if necessary, give you some suggestions that may help. I will make sure that the architecture of your project takes into account your immediate and future needs.
                </div>
                    <div className = "social-media-link-container">
                        <div className = "social-media-link">
                            <a href =  "https://github.com/Fley27" target = "_blank"><i className = "fab fa-github"></i></a>
                        </div>
                        <div className = "social-media-link">
                            <a href = "https://www.linkedin.com/in/fenley-jude-viky-menelas-856598193" target = "_blank">
                                <i className = "fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div className = "social-media-link">
                            <a href = "https://twitter.com/FenleyMenelas" target = "_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;