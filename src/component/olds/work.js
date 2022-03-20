import React from "react";
import ProjectCard from "./project-card";
import "../styles/work.css"
const Work = (props) =>{
    
    return(
        <div id = "work" className = {`work-container ${props.dark ? ` dark-mode`: ``}`}>
            <div className = "work container">
                <div className = "work-title">
                    <div>Showcase</div>
                </div>
                <div className =  "work-description">
                    Projects that I worked on, using the MERN STACK tecnology.
                </div>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Work;