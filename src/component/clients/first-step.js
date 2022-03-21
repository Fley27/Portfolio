import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/first-step.css"

const FirstStep = ({meta, link, title, Image, description, description2, description3}) => (
    <>
        <Helmet>
            <meta name = "description" content = {`${meta}`} />
            <link rel = "canonical" href = {`${link}`} />
        </Helmet>
        <div className = "first-step">
            <div className = "first-step-text">
                <div className = "first-step-title">
                    {title}
                </div>
                <div className = "first-step-description">
                    {description}
                    {
                        description2 ? (
                            <>
                                <br/><br/>
                                {description2}
                            </>
                        ): null
                    }
                    {
                        description3 ? (
                            <>
                                <br/><br/>
                                {description3}
                            </>
                        ): null
                    }
                </div>
            </div>
            <div className = "first-step-image-container animated-background">
                <img
                    alt = "first-step"
                    src = {Image}
                    loading  = {"lazy"}
                    className = "first-step-image"
                />
            </div>
        </div>
    </>
)

export default FirstStep;