import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../../component/header/header-mobile";
import Nav from "../../component/header/nav";
import FirstStep from "../../component/clients/first-step";
import Process from "../../component/clients/process/small-to-large-businesses";
import Details from "../../component/clients/details";
import Footer from "../../component/footer";
import Image from "../../images/restaurant-interior-min.jpeg"
import ImageDetails from "../../images/car-dealers.webp"
import "../../styles/about-page.css";

const SmallToLargeBusinesses = (props) =>{
    
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
                title = "SMALL TO LARGE BUSINESSES"
                description = "I do build websites for businesses but I am very particular about what I build and who I work with. I didn't get into development to build boring internal tools, I got into development to build cool things and have fun doing it."
                description2 = "If you're a business that is looking for something a little different than a standard corporate website, I am definitely interested in working with you. Priority will always be given to small businesses that align with my personality."
                description3 =  ""
                Image  = {Image}
            />
            <Process/>
            <Details
                Image = {ImageDetails}
                subtitle = "Treat website visitors like people, not numbers"
                description = "I don't care what any marketing firm is telling you, the belief that conversion rate is all that matters is outdated and no longer applicable. Yes, you want your website to generate more sales but more importantly than that, you want your website to build brand confidence."
                description2 = {`You want your clients to talk about you on social media, give you great Google reviews, and visit your website because they are generally into your brand and want to see you succeed. The ultimate way of ensuring this is, treating each and every visitor like a human being.`}
                description3 = "This means when they reach out with questions, you answer them back in a timely manner. You engage with them on social media when they comment on your content. It's some of the cheapest marketing out there but it's also generally ignored by medium to large corporations."
                description4 = "From the initial build of your website to my social media management services, I will position your company to be looked on as an example of great digital marketing and brand building."
            />
            <Footer/>
        </div>
    )
}

SmallToLargeBusinesses.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(SmallToLargeBusinesses);