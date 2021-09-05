import React from "react";
import "../styles/skill.css"
const Skill = () =>{
    return(
        <div className = "skill-container">
            <div className = "skill">
                <div className = "tag tag-h1">{"<h2>"}</div>
                <div className = "skill-title">
                    Stuff  That  I  Work  On
                </div>
                <div className = "tag tag-h1">{"<h2>"}</div>
                <div className = "tag tag-p1">{"<p1>"}</div>
                <div className =  "skill-description">
                    A small gallery of the last 3 projects that I work on. I've done everything from scratch using
                    the Mern Stack technology. <br/>Maybe not all the technologies in the same project, but no other one which 
                    not be part in it.
                </div>
                <div className = "tag tag-p1">{"<p1>"}</div>
            </div>
            <div className = "project-container">
                <div className = "tag tag-section">{"<section>"}</div>
                <div className = "project">
                    <div className = "project-card"></div>
                    <div className = "project-card"></div>
                    <div className = "project-card"></div>
                </div>
                <div className = "tag tag-section">{"<section>"}</div>
            </div>
        </div>
    )
}

export default Skill;