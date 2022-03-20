import React from "react";
import Booking from "../cards/booking";
import WhoIworkWith from "../who-i-work-with";
import Image from "../../images/flat.jpeg"
import "../../styles/skill-.css"

const ContactBottom = () => (
    <div className = "skill">
        <div className = "skill-image-container">
            <img
                alt = "skill"
                src = {Image}
                loading  = {"lazy"}
                className = "skill-image book"
            />
        </div>
        <div className = "who-i-work-container">
            <div className = "who-i-work">
                <Booking/>
                <WhoIworkWith/>
            </div>
        </div>
    </div>
)

export default ContactBottom;