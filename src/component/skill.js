import React, {useState} from "react";
import "../styles/skill.css";

const About = (props) =>{
    const [selected, setSelected] = useState(0);
    const handleSelected = (item) =>{
        setSelected(item)
    }
    return(
        <div id = "skill" className = {`skill-container container ${props.dark ? ` dark-mode` : ``}`}>
            <div className = "skill-item-container">
                <div className = "work-title">
                    <div>Skill & Experience</div>
                </div>
                <div className = "work-description">
                    Since beginning my journey as a freelancer nearly 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and customer use.<br/><br/>
                    I create successful responsive websites, web and mobile native application that are fast, easy to use
                    , and built with best practices. The main area of my expertise are the Mern Stack technologies, Mongodb/Mysql, ExpressJS, ReactJS/React Native & NodeJS.
                </div>
            </div>
            <div className = "skill-item-container">
                <div onClick = {()=>handleSelected(0)} className = {`skill-item ${selected === 0 ? `skill-item-selected`: ``}`}>
                    <div className = "skill-header">
                        <div className = "skill-header-title">Front-End</div>
                        <div className = "skill-collapse">
                            {
                                selected !== 0 ? (
                                    <i className="fas fa-angle-down"></i>
                                ):(
                                    <i className="fas fa-angle-up"></i>
                                )
                            }
                        </div>
                    </div>
                    <div className  = "skill-body">
                        <div className = "skill-body-item">
                            <div className = "skill-name">React</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color react"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">NextJS</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color next"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">Redux</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color redux"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">CSS / Bootstrap</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color css"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div onClick = {()=>handleSelected(1)} className = {`skill-item ${selected === 1 ? `skill-item-selected`: ``}`}>
                    <div className = "skill-header">
                        <div className = "skill-header-title">Back-End</div>
                        <div className = "skill-collapse">
                            {
                                selected !== 1 ? (
                                    <i className="fas fa-angle-down"></i>
                                ):(
                                    <i className="fas fa-angle-up"></i>
                                )
                            }
                        </div>
                    </div>
                    <div className  = "skill-body">
                        <div className = "skill-body-item">
                            <div className = "skill-name">ExpressJS</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color express"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">Rest Api</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color rest-api"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">NodeJS</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color node"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick = {()=>handleSelected(2)} className = {`skill-item ${selected === 2 ? `skill-item-selected`: ``}`}>
                    <div className = "skill-header">
                        <div className = "skill-header-title">Database</div>
                        <div className = "skill-collapse">
                            {
                                selected !== 2 ? (
                                    <i className="fas fa-angle-down"></i>
                                ):(
                                    <i className="fas fa-angle-up"></i>
                                )
                            }
                        </div>
                    </div>
                    <div className  = "skill-body">
                        <div className = "skill-body-item">
                            <div className = "skill-name">Mongodb</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color mongo"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">Mysql</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color mysql"></div>
                            </div>
                        </div>
                        <div className = "skill-body-item">
                            <div className = "skill-name">Sqlite</div>
                            <div className = "skill-progress-bar">
                                <div className = "skill-progress-bar-color sqlite"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;