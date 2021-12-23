import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Contact from "../component/contact";
import Header from "../component/header/header";
import About from "../component/about";
import Work from "../component/work";
import HeaderMobile from "../component/header/header-mobile";
import Skill from "../component/skill"
import "../styles/home.css";

const Home = (props) =>{

    const [show, setShow] = useState(false);
    const [dark, setDark] = useState(true);

    const handleShow = () =>{
        setShow(!show)
    } 
    
    const handleDark = () =>{
        setDark(!dark)
    }

    useEffect(() => {
        setDark(props.reducer.mode === "true" ? true : false)
        console.log(props.reducer.mode)
    }, [props.reducer]); 

    const isInViewport = (element) =>{
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    return(
        <div className = {`home-container ${dark ? ` dark-mode`: ``}`}>
            <div className = "home-item">
                <Header
                    handleShow = {handleShow}
                    dark = {dark}
                    handleDark = {handleDark}
                />
                <HeaderMobile
                    show =  {show}
                    handleShow = {handleShow}
                    main_link =  "/"
                    dark = {dark}
                    handleDark = {handleDark}
                />
                <Work
                    isInViewport = {isInViewport}
                    dark = {dark}
                />
                <Skill
                    dark = {dark}
                />
                <About
                    isInViewport = {isInViewport}
                    dark = {dark}
                />
                <Contact
                    isInViewport = {isInViewport}
                    dark = {dark}
                />
            </div>
        </div>
    )
}

Home.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(Home);