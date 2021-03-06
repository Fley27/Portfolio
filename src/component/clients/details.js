import React from "react"
import { Helmet } from "react-helmet-async";
import "../../styles/details.css"

const Details = ({link, meta, Image, subtitle, description, description2, description3, description4}) => (
    <>
        <Helmet>
            <meta name = "description" content = {`${meta}`} />
            <link rel = "canonical" href = {`${link}`} />
        </Helmet>
        <div className = "details">
            <div className = "activity">
                <div className = "details-activity-image animated-background">
                    <img
                        alt = "details"
                        src = {Image}
                        loading  = {"lazy"}
                        className = "details-avatar-image"
                    />
                </div>
                <div className = "details-text"> 
                    <div className = "details-title">
                        THE DETAILS
                    </div>
                    <div className = "details-subtitle">
                        {subtitle}
                    </div>
                    <div className = "details-description">
                        {
                            description
                        }
                    <br/><br/>
                        {
                            description2
                        }
                    {
                        description3 ? (
                            <>
                                <br/><br/>
                                {
                                    description3
                                }
                            </>
                        ):null
                    }
                    {
                        description4 ? (
                            <>
                                <br/><br/>
                                {
                                    description4
                                }
                            </>
                        ):null
                    }
                    </div>
                    <div className = "buttons">
                            <button onClick = {()=> window.location.href = "/about"} className = "button-header-contact about">
                                ABOUT FLEY
                            </button>
                            <button onClick = {()=> window.location.href = "/book"} className = "button-header-contact book">
                                CONTACT
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Details