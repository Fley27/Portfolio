import "../../styles/first-step.css"

const FirstStep = ({title, Image, description, description2, description3}) => (
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
        <div className = "first-step-image-container">
            <img
                alt = "first-step"
                src = {Image}
                loading  = {"lazy"}
                className = "first-step-image"
            />
        </div>
    </div>
)

export default FirstStep;