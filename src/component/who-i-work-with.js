import React from "react";
import "../styles/who-i-work-with.css";

const WhoIworkWith = () => (
    <div className = "who-i-work-with">
        <div className = "who-i-work-with-title">
            Who I work With
        </div>
        <div onClick = {() => window.location.href  = "/adult-performer-and-content-creators"} className = "who-i-work-with-item"> <div></div> Adult Performers and Content Creators</div>
        <div onClick = {() => window.location.href  = "/social-media-influencers"} className = "who-i-work-with-item"> <div></div> Social Media Influencers</div>
        <div onClick = {() => window.location.href  = "/bands-music-artists"}   className = "who-i-work-with-item"> <div></div> Musicians</div>
        <div onClick = {() => window.location.href  = "/youtube-and-twitch-content-creators"} className = "who-i-work-with-item"> <div></div> YouTube and Twitch Creators</div>
        <div onClick = {() => window.location.href  = "/digital-artists-and-photographers"} className = "who-i-work-with-item"> <div></div> Digital Artists & Photographers</div>
        <div onClick = {() => window.location.href  = "/small-to-large-businesses"} className = "who-i-work-with-item"> <div></div> Small To Large Businesses</div>
    </div>
)

export default WhoIworkWith;
