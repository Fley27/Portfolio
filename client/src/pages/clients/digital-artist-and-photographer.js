import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/digital-artist";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/digital-artist-min.jpeg"
import ImageDetails from "../../images/photographer.jpeg"
import "../../styles/about-page.css";

const DigitalArtist = (props) =>{
    
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
                title = "DIGITAL ARTISTS AND PHOTOGRAPHERS"
                description = "There has never been a more interesting time for digital artists and photographers with the rise of NFTs and the ability to make a ton of money off of your work."
                description2 = "While social media can be a good place to build an audience, it is also easy to get drowned out with all of the other artists using it. That's why a dedicated website is a huge asset when it comes to truly showcasing your work."
                description3 =  ""
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "Ensure your work is displayed in the best way possible"
                description = "Posting your work to social media is a great way to gain more exposure, but it's not always shown in the best way possible. With a custom built website, you can show your work at the highest quality resolution in a way that compliments each and every piece of art. You don't have it getting cropped to fit the dimensions of whatever social media site you're posting to, and it's a great way to prove ownership if someone tries stealing your content."
                description2 = {`The biggest advantage of having a website, is the ability to monetize your work. Through an online shop, you can convert your artwork into merchandise that could potentially generate passive income for a long time. Add in the ability to showcase and sell NFTs and you could become an innovator in an up and coming (and every exciting) technology.`}
                description3 = ""
            />
            <Footer/>
        </div>
    )
}

DigitalArtist.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(DigitalArtist);