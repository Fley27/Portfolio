import React from "react";
import "../../styles/process-card.css";

const ProcessCard = ({title, description, description2, description3}) => (
    <div className = "process-card">
        <div className = "card-process-title">
            {title}
        </div>
        <div className = "process-card-description">
            {description}
        </div>
        <div className = "process-card-description">
            {description2}
        </div>
        <div className = "process-card-description">
            {description3}
        </div>
    </div>
)

export default ProcessCard