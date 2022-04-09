import React, {useState} from 'react';
import {connect} from 'react-redux';
import { setMode } from '../../redux/action/action';
import PropTypes from 'prop-types';

const Nav = (props)=>{
    const [hidden, setHidden] = useState(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }
    return(
        <div className = {`nav-container ${props.dark ? ` dark-mode`: ``}`}>
            <div className = "nav">
                <div className = "logo-container">
                    <div onClick = {()=> window.location.href = "/about"} className = "name-logo">Fenley Ménélas</div>
                    <button onClick = {()=>{
                        props.handleShow();
                        handleHidden();
                    }}   className = {`${!hidden ? "close" : "menu-icon"}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className = "nav-item-container">
                    {
                        window.location.pathname !== "/" ? (
                            <div onClick = {()=> window.location.href = "/"} className = {`nav-item ${window.location.pathname === "/" ? " nav-item-selected": ""}`}>
                                <span>Home</span>
                            </div>
                        ): null
                    }
                    <div onClick = {()=> window.location.href = "/about"} className = {`nav-item ${window.location.pathname === "/about" ? " nav-item-selected": ""}`}>
                        <span>About</span>
                    </div>
                    <div onClick = {()=> window.location.href = "/portfolio"} className = {`nav-item ${window.location.pathname === "/about" ? " nav-item-selected": ""}`}>
                        <span>Portfolio</span>
                    </div>
                    <div  className = {`nav-item ${window.location.pathname !== "/" & window.location.pathname !== "/about" & window.location.pathname !== "/book"  ? " nav-item-selected": ""}`}>
                        <span>My Clients <i className="fas fa-sort-down"></i></span>
                        <div className = "dropdown">
                            <div onClick = {() => window.location.href  = "/adult-performer-and-content-creators"} className = {`dropdown-item ${window.location.pathname  === "/adult-performer-and-content-creators" ? " dropdown-item-selected" : ""}`}>Adult Performers and Content Creators</div>
                            <div onClick = {() => window.location.href  = "/social-media-influencers"}             className = {`dropdown-item ${window.location.pathname  === "/social-media-influencers" ? " dropdown-item-selected" : ""}`}>Social Media Influencers</div>
                            <div onClick = {() => window.location.href  = "/bands-music-artists"}                  className = {`dropdown-item ${window.location.pathname  === "/bands-music-artists" ? " dropdown-item-selected" : ""}`}>Bands and Music Artists</div>
                            <div onClick = {() => window.location.href  = "/youtube-and-twitch-content-creators"}  className = {`dropdown-item ${window.location.pathname  === "/youtube-and-twitch-content-creators" ? " dropdown-item-selected" : ""}`}>Youtube and Twitch Content Creators</div>
                            <div onClick = {() => window.location.href  = "/digital-artists-and-photographers"}    className = {`dropdown-item ${window.location.pathname  === "/digital-artists-and-photographers" ? " dropdown-item-selected" : ""}`}>Digital Artists and Photographers</div>
                            <div onClick = {() => window.location.href  = "/small-to-large-businesses"}            className = {`dropdown-item ${window.location.pathname  === "/small-to-large-businesses" ? " dropdown-item-selected" : ""}`}>Small to Large Businesses</div>
                        </div>
                    </div>
                    <div onClick = {()=> window.location.href = "/book"} className = {`nav-item ${window.location.pathname === "/book" ? " nav-item-selected": ""}`}>
                        <span>Contact</span>
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
