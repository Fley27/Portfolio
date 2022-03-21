import React from "react";
import {connect} from 'react-redux';
import { setMode } from '../../redux/action/action';
import PropTypes from 'prop-types';
import "../../styles/header-mobile.css";


const HeaderMobile = ({show, handleShow, main_link, ...props}) => {
    const handleNavigation = (link) => {
        window.location.href = `#${link}`
        handleShow()
    }
    const handleViewMode = () => {
        props.setMode(!props.dark)
        handleShow()
    }
    return(
        <div className = {`menu-mobile ${show ? ` menu-mobile-visible` : ``}`}>
            <div className = "nav-mobil-container">
                <div className = "menu-mobile-header">
                    <div className = "mobile-header-title">Menu</div>
                    <button onClick = {()=> handleShow()}  className = "mobile-header-icon"><i className ="fas fa-times"></i></button>
                </div>
                <div className = "nav-mobile">
                    <div className = "nav-item-mobile">
                        <button onClick = {()=>window.location.href = "/"} className = {`nav-item-mobile-button ${window.location.pathname === "/" ? " nav-item-selected" : ""}`}>Home</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=> window.location.href = "/about"} className = {`nav-item-mobile-button ${window.location.pathname === "/about" ? " nav-item-selected" : ""}`}>About</button>
                    </div>
                    <div className = "nav-item-mobile">
                        <button  className = {`nav-item-mobile-button ${window.location.pathname !== "/" & window.location.pathname !== "/about" & window.location.pathname !== "/book"  ? " nav-item-selected" : ""}`}>My Clients <i className="fas fa-sort-down"></i></button>
                        <div className = "dropdown-mobile">
                            <div onClick = {() => window.location.href  = "/adult-performer-and-content-creators"} className = {`dropdown-item-mobile ${window.location.pathname  === "/adult-performer-and-content-creators" ? " dropdown-item-mobile-selected" : ""}`}>Adult Performers and Content Creators</div>
                            <div onClick = {() => window.location.href  = "/social-media-influencers"}             className = {`dropdown-item-mobile ${window.location.pathname  === "/social-media-influencers" ? " dropdown-item-mobile-selected" : ""}`}>Social Media Influencers</div>
                            <div onClick = {() => window.location.href  = "/bands-music-artists"}                  className = {`dropdown-item-mobile ${window.location.pathname  === "/bands-music-artists" ? " dropdown-item-mobile-selected" : ""}`}>Bands and Music Artists</div>
                            <div onClick = {() => window.location.href  = "/youtube-and-twitch-content-creators"}  className = {`dropdown-item-mobile ${window.location.pathname  === "/youtube-and-twitch-content-creators" ? " dropdown-item-mobile-selected" : ""}`}>Youtube and Twitch Content Creators</div>
                            <div onClick = {() => window.location.href  = "/digital-artists-and-photographers"}    className = {`dropdown-item-mobile ${window.location.pathname  === "/digital-artists-and-photographers" ? " dropdown-item-mobile-selected" : ""}`}>Digital Artists and Photographers</div>
                            <div onClick = {() => window.location.href  = "/small-to-large-businesses"}            className = {`dropdown-item-mobile ${window.location.pathname  === "/small-to-large-businesses" ? " dropdown-item-mobile-selected" : ""}`}>Small to Large Businesses</div>
                        </div>
                    </div>
                    <div className = "nav-item-mobile">
                        <button onClick = {()=> window.location.href = "/book"} className = {`nav-item-mobile-button ${window.location.pathname === "/book" ? " nav-item-selected" : ""}`}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderMobile.propTypes = {
    setMode: PropTypes.object.isRequired
}


export default connect(null, {setMode})(HeaderMobile);