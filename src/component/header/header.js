import React from "react";
import Nav from "./nav";
import HeaderBody from "./header-body";
import "../../styles/header.css";

const Header = (props) => {
    return(
        <div className = "header-container">
            <Nav
                handleShow = {props.handleShow}
                dark = {props.dark}
                handleDark = {props.handleDark}
            />
            <HeaderBody/>
        </div>
    )
}

export default Header;