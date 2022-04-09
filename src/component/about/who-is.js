import React  from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/who-is.css"

const WhoIS = () => {
    return(
        <>
            <Helmet>
                <meta name = "description" content = "Fullstack Developer  and Digital Marketer - Expert in SEO - Eager and Proactive seller." />
                <link rel = "canonical" href = "/about" />
            </Helmet>
            <div className = "who-is-container">
                <div className = "about-title">
                    Who is Fenley Menelas? 
                </div>
                <div className = "about-information">
                    <div className = "about-information-title">
                        I am a Fullstack Developer and Digital Marketing Expert
                    </div>
                    <div className = "about-information-description">
                        I speak 4 languages - French, Spanish, English and Haitian Creole. 
                        <br/> <br/>
                        I am a proactive and organized person who can work easily and effectively  under pressure to meet set objectives.
                        I am also a team player - and open to everyone's ideas and opinions to improve ongoing processes...
                        <br/><br/>
                        I look forward to learning new things every day, 
                        and helping more people to archive their goal while doing what they love and what they do best. 
                        <br/> <br/>
                        With that being said, nice to meet you. I'm Fenley Ménélas. Let's build something.
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhoIS;