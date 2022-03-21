import React from "react"
import "../styles/footer.css"

const Footer = () => (
    <div className = "footer-container">
        <div className = "footer">
            <div className = "footer-title">Contact Fenley</div>
            <div className = "footer-email">EMAIL:  <a href = "mailto:fenleymenelas@gmail.com">fenleymenelas@gmail.com</a></div>
            <div className = "footer-title">Follow Fenley</div>
            <div className = "footer-social">
                <div className = "social-media-link-footer">
                    <a  rel="noopener noreferrer" href =  "https://github.com/Fley27" target = "_blank"><i className = "fab fa-github"></i></a>
                </div>
                <div className = "social-media-link-footer ">
                    <a  rel="noopener noreferrer" href = "https://www.linkedin.com/in/fenley-jude-viky-menelas-856598193" target = "_blank">
                        <i className = "fab fa-linkedin"></i>
                    </a>
                </div>
                <div className = "social-media-link-footer ">
                    <a  rel="noopener noreferrer" href = "https://twitter.com/FenleyMenelas" target = "_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className = "footer-bar"></div>
            <div className = "footer-copyright">Copyright {new Date().getFullYear()} © <span onClick = {()=> window.location.href = "/about"} >Fenley Ménélas</span></div>
        </div>
    </div>
) 

export default Footer