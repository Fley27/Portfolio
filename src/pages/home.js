import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../component/header/header";
import Brand from "../component/home/brand";
import Client from "../component/home/client";
import HeaderMobile from "../component/header/header-mobile";
import Footer from "../component/footer";
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

                <Brand/>
                <Client/>
                <Footer/>
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