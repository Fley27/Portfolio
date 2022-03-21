import React  from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/who-is.css"

const WhoIS = () => {
    return(
        <>
            <Helmet>
                <meta name = "description" content = "Fullstack Developer 
                    and Digital Marketer - Expert in SEO - Eager and Proactive seller." />
                <link rel = "canonical" href = "/about" />
            </Helmet>
            <div className = "who-is-container">
                <div className = "about-title">
                    Who is Fenley Menelas? 
                </div>
                <div className = "about-information">
                    <div className = "about-information-title">
                        I am a Fullstack Developer and an Expert Digital Marketing
                    </div>
                    <div className = "about-information-description">
                        I like soccer, cars, new electronic gadgets and jewelry - oh no, not so much!!! 
                        <br/> <br/>
                        I love helping people. But what I love most is selling, and to sell well - you need a good strategy or strategies. 
                        That's why you and I should work together to bring your dreams to life. And also to make them your bread and butter 
                        so that you can live the life you desire and dream of. 
                        <br/> <br/>
                        With that being said, nice to meet you. I'm Fenley Ménélas. Let's build something.
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhoIS;