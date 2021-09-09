import profile from "../../images/fenley.jpeg"
const HeaderBody = (props) =>{
    return(
        <div className = {`header ${props.dark ? `dark-mode`: ``}`}>
                <div className = "social-media-container">
                    <div className = "social-media-item">
                            <a href = "www.linkedin.com/in/fenley-jude-viky-menelas-856598193/" target = "_blank">
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
                    <div className = "text-zone-title">Hi, I'm <span className = "important">Fenley</span></div>
                    <div className = "text-zone-subtitle"><span className = "important_">Web & Mobile</span> Developer</div>
                    <div className = "text-zone-description">
                        High level experience in web and mobile development knowledge, producing quality work.
                    </div>
                    <button className = "button-header-contact">
                        Contact me !
                    </button>
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
                <div className = "image">
                    <div className = "image-header-container">
                        <img 
                            className = "image-header-image"
                            src = {profile}
                            alt = "profile"
                        />
                    </div>
                </div>
                <div className = "overlay"></div>
            </div>
    )
}

export default HeaderBody