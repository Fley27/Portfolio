import React from "react"

const HeaderBody = (props) =>{
    return(
        <div className = {`header`}>
                <div className = "social-media-container">
                    <div className = "social-media-item">
                            <a href = "https://linkedin.com/in/fenley-jude-viky-menelas-856598193/" target = "_blank">
                                <i className = "fab fa-linkedin"></i>
                            </a></div>
                    <div className = "social-media-item"><a href =  "https://github.com/Fley27" target = "_blank"><i className = "fab fa-github"></i></a></div>
                    <div className = "social-media-item">
                        <a href = "https://twitter.com/FenleyMenelas" target = "_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className = "text-zone-container">
                    <div className = "text-zone-title">Sofware Developer & Digital Marketer</div>
                    <div className = "text-zone-subtitle"></div>
                    <div className = "text-zone-description">
                        High level of experience in building modern, fast and scalable websites and applications that allow my business clients to establish or consolidate their online presence so that they can increase their income X times.
                    </div>
                    <div className = "buttons">
                        <button onClick = {()=> window.location.href = "/about"} className = "button-header-contact about">
                            ABOUT ME
                        </button>
                        <button onClick = {()=> window.location.href = "/book"} className = "button-header-contact book">
                            BOOK NOW
                        </button>
                    </div>
                    <div className = "mouse-down-container">
                        <div className = "mouse-down-icon">
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <div className = "mouse-down-text">Scroll down</div>
                    </div>
                </div>
                <div className = "overlay"></div>
            </div>
    )
}

export default HeaderBody