import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../component/header/header-mobile";
import Nav from "../component/header/nav";
import Contact from "../component/contact/contact-form";
import ContactBottom from "../component/contact/contact-bottom";
import Footer from "../component/footer";
import "../styles/about-page.css";

const ContactPage = (props) =>{
    
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
            <Contact/>
            <ContactBottom/>
            <Footer/>
        </div>
    )
}

ContactPage.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(ContactPage);