import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Work from "../component/work";
import HeaderMobile from "../component/header/header-mobile";
import Nav from "../component/header/nav";
import "../styles/about.css"

const Work_ = (props) =>{
    
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

    return(
        <div className = {`about-page ${dark ? ` dark-mode`: ``}`}>
            <Nav
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
            <div className = "-component">
                <Work
                    dark = {dark}
                />
            </div>
        </div>
    )
}

Work_.propTypes = {
    reducer: PropTypes.object.isRequired,
    setMode: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    reducer: state.reducer,
})

export default connect(mapStateToProps)(Work_);