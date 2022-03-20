import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/adult";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/adult.jpeg"
import ImageDetails from "../../images/adult-detail.jpeg"
import "../../styles/about-page.css";

const AdultPerformer = (props) =>{
    
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
                title = "ADULT PERFORMERS AND CONTENT CREATORS"
                description = "One of the niches I focus on is building websites for individuals that are creating adult content online. My goal is to provide a safe space for creators that is absolutely free from judgment."
                description2 = "With the rise of websites like OnlyFans, there has been a huge demand for creators that want to take their brands to the next level. Many of these creators have told me that regular web design firms are either too expensive or completely out of touch with the industry."
                description3 =  "I create another option for creators that want to take more ownership of their content, whether that is with an online shop for selling merchandise or a totally separate site to post content on."
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "I am dedicated to providing a safe space for all creators"
                description = "When I first started pursuing work in this industry, I made a commitment to make every single client feel safe and respected. I want creators to have full ownership of their brand and I want you to be happy with what we are creating. At any point in the process that you feel that the website we are building for you, doesn't portray who you are or what you stand for, we will reevaluate and make all necessary changes."
                description2  = "I've also put in place the option to deal with other developers of all gender identities if that is something you would prefer. I will still be the one building the website, but I do like to offer my clients options that will make the process as comfortable as possible."
            />
            <Footer/>
        </div>
    )
}

AdultPerformer.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(AdultPerformer);