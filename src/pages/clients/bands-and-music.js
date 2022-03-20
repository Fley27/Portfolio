import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/band-music";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/band-performing-studio-min.jpeg"
import ImageDetails from "../../images/happy-asian-woman-songwriter-playing-acoustic-guitar-listen-song-from-smartphone-min.jpeg"
import "../../styles/about-page.css";

const BandsMusic = (props) =>{
    
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
                title = "BANDS AND MUSIC ARTISTS"
                description = "Musicians get a huge benefit from having a website. You can sell merch, post tour dates and keep your fans up to date with what's been going on. It also gives you a chance to consolidate the links to all of your related pages in one place - Spotify, iTunes, and YouTube can all be accessed from the same page."
                description2 = "With each build I can also implement a blog that will let you make posts related to any tour or release info."
                description3 =  ""
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "You write the music, I'll write the code"
                description = "Building websites for musicians is an absolute blast! You have music that I can listen to while I build, and most people that make music generally have an aesthetic that I can build off of. I want your website to be an extension of who you are and what your music represents."
                description2 = "I like going over what you would like the site to look like (colors, imagery, etc.) and come back with a rough design before I code anything. Some musicians want the main focus to be on the music, while others want a site where they can sell their merch. Either way, I got you covered."
                description3 = "Note: I do not accept payment in beer. Well, maybe some beer, we can discuss specifics later."
            />
            <Footer/>
        </div>
    )
}

BandsMusic.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(BandsMusic);