import React from "react";
import {connect} from 'react-redux';
import { setMode } from '../../redux/action/action';
import PropTypes from 'prop-types';
import "../../styles/header.css";


const HeaderMobile = ({show, handleShow, main_link, ...props}) => {
    return(
        <div className = {`menu-mobile ${props.dark ? `dark-mode` : ``} ${show ? ` menu-mobile-how` : ``}`}>
                <div className = "menu-mobile-header">
                    <div className = "mobile-header-title">Menu</div>
                    <button onClick = {()=> handleShow()}  className = "mobile-header-icon"><i className ="fas fa-times"></i></button>
                </div>
                <div className = "nav-mobile">
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/"} className = {`nav-item-mobile-text ${main_link === "/" ? " nav-item-selected" : ""}`}>Home</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/about"} className = {`nav-item-mobile-text ${main_link === "/about" ? " nav-item-selected" : ""}`}>About</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/skill"} className = {`nav-item-mobile-text ${main_link === "/skills" ? " nav-item-selected" : ""}`}>My skills</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/work"} className = {`nav-item-mobile-text ${main_link === "/work" ? " nav-item-selected" : ""}`}>Work</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/contact"} className = {`nav-item-mobile-text ${main_link === "/contact" ? " nav-item-selected" : ""}`}>Contact</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button className = "nav-item-mobile-text">
                            {
                                props.dark ? (<span onClick = {()=>props.setMode(false)}><i className="fas fa-moon"></i></span>): 
                                (<span onClick = {()=>props.setMode(true)}><i className="far fa-moon"></i></span>)
                            }
                        </button>
                    </div>
                </div>
        </div>
    )
}

HeaderMobile.propTypes = {
    setMode: PropTypes.object.isRequired
}


export default connect(null, {setMode})(HeaderMobile);