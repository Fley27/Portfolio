import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/social-media";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/influencer-min.jpeg"
import ImageDetails from "../../images/beauty-blogger-min.jpeg"
import "../../styles/about-page.css";

const SocialMedia = (props) =>{
    
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
                title = "SOCIAL MEDIA INFLUENCERS"
                description = "Your personal brand represents who you are and I am here to help you take it to the next level."
                description2 = "As someone who has a larger following on Twitter, I understand the desire to grow a following off of socials. Everything you've built can be taken away with a ban and then you're left with a bunch of wasted time and effort.."
                description3 =  "Let's build something that you own and have full control over."
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "Always working to expand your personal brand"
                description = "Many design firms that build sites for influencers don't actually understand the hustle and work that goes into building an online brand. At the end of the day, they're businesses and many of them don't actually understand what goes into building a brand on social media."
                description2  = "I work with social media every single day so I understand the time commitment it takes to keep releasing engaging content. It's a balancing act that I can help you with by building and maintaing your personal site."
                description3 = "If you want to build something, reach out to me. If not, at least follow me on Twitter, I need that clout."
            />
            <Footer/>
        </div>
    )
}

SocialMedia.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(SocialMedia);