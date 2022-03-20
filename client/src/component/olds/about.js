import React from "react";
import "../styles/about.css";

const About = (props) =>{
    
    return(
        <div id = "about" className = {`about-container container ${props.dark ? ` dark-mode` : ``}`}>
            <div className = "about-item">
                <div className = "work-title">
                    <div>About</div>
                </div>
                <div className = "work-description about-description">
                    With the evolution of time, the competition has become increasingly tough. It's good to have an account on social networks to promote your business, but the attention it requires is only possible with the creation of a specific website for your activity. Which is my specialty. 
                    My goal is to create an adequate space so that your works, your contents are highlighted. Thus, through your own website, you will certainly have a better attention from your fans. You will also have more control over your content. You will normally continue your publications on the networks, but the objective is also to encourage them to visit your site.
                    In short, it will be with great pleasure if you allow me to structure your activity. 
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