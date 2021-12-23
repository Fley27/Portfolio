import React from "react";
import ProjectCard from "./project-card";
import "../styles/work.css"
const Work = (props) =>{
    
    return(
        <div id = "work" className = {`work-container ${props.dark ? ` dark-mode`: ``}`}>
            <div className = "work container">
                <div className = "work-title">
                    <div>My Portfolio</div>
                </div>
                <div className =  "work-description">
                    A small gallery of the last 3 projects that I worked on. I've done everything from scratch using
                    the Mern Stack technology.
                </div>

                <ProjectCard/>
            </div>
        </div>
    )
}

export default Work;