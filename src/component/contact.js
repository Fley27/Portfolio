import React from "react";
import "../styles/contact.css"

const Contact = () => {
    return(
        <div className = "contact-container">
            <div className = "contact-item">
            <div className = "tag tag-h1">{"<h2>"}</div>
                <div className = "about-title">
                    Contact me
                </div>
                <div className = "tag tag-h1">{"</h2>"}</div>
                <div className = "tag tag-p1">{"<p1>"}</div>
                <div className =  "about-description">
                    I'm interested in freelance opportunities - especially ambitious or large projects.
                    However, If you have other request or question, don't hesitate to use the form.
                </div>
                <div className = "tag tag-p1">{"</p1>"}</div>
                <div className = "tag tag-p1">{"<form>"}</div>
                <form className = "contact-form">
                    <div className = "row-contact">
                        <div className  = "col-contact">
                            <input type = "text" placeholder =  "Name" name = "name"/>
                        </div>
                        <div className  = "col-contact">
                            <input type = "text" placeholder =  "Email" name = "email"/>
                        </div>
                    </div>
                    <div className  = "row-contact">
                        <input type = "text" placeholder =  "Subject" name = "subject"/>
                    </div>
                    <div className  = "row-contact">
                        <textarea type = "text" placeholder =  "Message" name = "message"/>
                    </div>
                    <button className = "form-button">
                        Send message!
                    </button>
                </form>
                <div className = "tag tag-p1">{"</form>"}</div>
            </div>
            <div className = "contact-item">
                
            </div>
        </div>
    )
}

export default Contact;