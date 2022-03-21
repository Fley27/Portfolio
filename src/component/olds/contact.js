import React, {useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail } from "../redux/action/email";
import emailjs from 'emailjs-com';
import { setAlert } from "../redux/action/alert";
import  WorldMap from 'react-world-map';
import "../styles/contact.css"


const Contact = (props) => {
    const [state, setState] =  useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!state.name || !state.subject || !state.email || !state.message)
            return props.setAlert("Fill all the fields", "error");

        const obj = {};
        obj.name = state.name;
        obj.subject = state.subject;
        obj.email = state.email;
        obj.message = state.message;

        emailjs.sendForm('service_7jt33ni', 'template_eyx34nw', e.target, 'user_iCcrHAsQdbfvFey65FEL1')
        .then((result) => {
            setState({
                name: "",
                subject: "",
                email: "",
                message: ""
            })
            props.setAlert("Your message has been sent successfully", "success");
        }, (error) => {
            props.setAlert("Request Failed, Try later.", "error")
        });
    }
    
    return(
        <div id = "contact" className = {`contact-container `}>
            <div className = "contact-item">
                <div className = "info-container">
                    <div className = "address-label">Address</div>
                    <div className = "address">Street Villas Noa,<br/>Santiago De Los Caballeros 51000</div>
                    <div className = "address-label">Email</div>
                    <div className = "address">fenleymenelas@gmail.com</div>
                    <div className = "address-label">Phone</div>
                    <div className = "address">+1 (809) 614-3463</div>
                </div>
                <form onSubmit = {handleSubmit} className = "contact-form">
                    <div className = "row-contact">
                        <div className  = "col-contact">
                            <input onChange = {handleChange} value = {state.name} type = "text" placeholder =  "Name" name = "name"/>
                        </div>
                        <div className  = "col-contact">
                            <input onChange = {handleChange}  value = {state.email}  type = "text" placeholder =  "Email" name = "email"/>
                        </div>
                    </div>
                    <div className  = "row-contact">
                        <input onChange = {handleChange}  value = {state.subject} type = "text" placeholder =  "Subject" name = "subject"/>
                    </div>
                    <div className  = "row-contact">
                        <textarea onChange = {handleChange}  value = {state.message} type = "text" placeholder =  "Message" name = "message"/>
                    </div>
                    <button type = "submit" className = "form-button">
                        Send message!
                    </button>
                </form>
            </div>
            <div className = "contact-item">
                <div className = "world-map">
                    <WorldMap selected={ "na"}  />
                </div>
                <div className = "info-container">
                    <div className = "address-label">Address</div>
                    <div className = "address">Street Villas Noa,<br/>Santiago De Los Caballeros 51000</div>
                    <div className = "address-label">Email</div>
                    <div className = "address">fenleymenelas@gmail.com</div>
                    <div className = "address-label">Phone</div>
                    <div className = "address">+1 (809) 614-3463</div>
                </div>
            </div>
            
        </div>
    )
}

Contact.propTypes = {
    sendEmail: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    email: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    email: state.email,
});


export default connect(mapStateToProps, {sendEmail, setAlert})(Contact);