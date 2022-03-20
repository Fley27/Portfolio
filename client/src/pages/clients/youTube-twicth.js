import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/youtube-twitch";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/professional-gamer-min.jpeg"
import ImageDetails from "../../images/youtubers-min.jpeg"
import "../../styles/about-page.css";

const YouTubeTwitch = (props) =>{
    
    const [show, setShow] = useState(false);

    const handleShow = () =>{
        setShow(!show)
    } 

    return(
        <div className = {`about-page-container`}>
            <Nav
                handleShow = {handleShow}
            />
            <HeaderMobile
                show =  {show}
                handleShow = {handleShow}
                main_link =  "/"
            />
            <FirstStep
                title = "YOUTUBE AND TWITCH CONTENT CREATORS"
                description = "If you're a content creator on YouTube or Twitch, you do not have time to put towards anything else. Building a website takes time, and time is not something that content creators have much of. In between being live, developing new content and video editing, you really don't have time to build or manage a website."
                description2 = "I have worked with content creators in the social media marketing field for a long time, and with that knowledge I can build something your fans will enjoy when you're not live."
                description3 =  ""
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "You write the music, I'll write the code"
                description = "Story time."
                description2 = {`A few years ago I actually tried my hand at streaming. I wasn't great at it but I did manage to get myself affiliated on Twitch. So now you're probably wondering, "Jack, why did you stop streaming?" Well, after about 4 months I started to realize that it is really hard. It requires you to be "on" all the time and you need to put in the work to become successful. This is why I put a focus on building sites for YouTubers and Twitch streamers.`}
                description3 = "Note: I do not accept payment in beer. Well, maybe some beer, we can discuss specifics later."
            />
            <Footer/>
        </div>
    )
}

YouTubeTwitch.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(YouTubeTwitch);