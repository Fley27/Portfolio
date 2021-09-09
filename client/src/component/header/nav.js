import React from 'react';
import {connect} from 'react-redux';
import { setMode } from '../../redux/action/action';
import PropTypes from 'prop-types';

const Nav = (props)=>{
    return(
        <div className = {`nav-container ${props.dark ? ` dark-mode`: ``}`}>
            <div className = "nav">
                <div className = "logo-container">
                    <div onClick = {()=> window.location.href = "/"} className = "name-logo">Fenley</div>
                    <button onClick = {()=>{ 
                        props.handleShow();
                    }}  className = "menu-icon">
                        <i className ="fas fa-bars"></i>
                    </button>
                </div>
                <div className = "nav-item-container">
                    <div onClick = {()=> window.location.href = "/about"} className = "nav-item">
                        <span>About</span>
                    </div>
                    <div onClick = {()=> window.location.href = "/skill"} className = "nav-item">
                        <span>My Skills</span>
                    </div>
                    <div onClick = {()=> window.location.href = "/work"} className = "nav-item">
                        <span>Work</span>
                    </div>
                    <div onClick = {()=> window.location.href = "/contact"} className = "nav-item">
                        <span>Contact</span>
                    </div>
                    <div className = "nav-item">
                        {
                            props.dark ? (<span onClick = {()=>props.setMode(false)}><i className="fas fa-moon"></i></span>): 
                            (<span onClick = {()=>props.setMode(true)}><i className="far fa-moon"></i></span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Nav.propTypes = {
    setMode: PropTypes.object.isRequired
}


export default connect(null, {setMode})(Nav);