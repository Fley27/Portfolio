import React from "react";
import ProjectCard from "./project-card";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import "../styles/work.css"
const Work = (props) =>{
    
    return(
        <div className = {`work-container ${props.dark ? ` dark-mode`: ``}`}>
            <div className = "work container">
                <div className = "work-title">
                    <div>My Portfolio</div>
                </div>
                <div className =  "work-description">
                    A small gallery of the last 3 projects that I work on. I've done everything from scratch using
                    the Mern Stack technology. <br/>Maybe not all the technologies in the same project, but no other one which 
                    not be part in it.
                </div>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Work;