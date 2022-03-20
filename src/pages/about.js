import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HeaderMobile from "../component/header/header-mobile";
import Nav from "../component/header/nav";
import WhoIS from "../component/about/who-is";
import Skill from "../component/about/skill";
import Footer from "../component/footer";
import "../styles/about-page.css";

const AboutPage = (props) =>{
    
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
            <WhoIS/>
            <Skill/>
            <Footer/>
        </div>
    )
}

AboutPage.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(AboutPage);