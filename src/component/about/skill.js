import React from "react";
import Collective from "../cards/collective"; 
import WhoIworkWith from "../who-i-work-with";
import Image from "../../images/girl-social-media-min.jpeg"
import Avatar from "../../images/avatar.png"
import "../../styles/skill-.css"

const Skill = () => (
    <div className = "skill">
        <div className = "skill-image-container animated-background">
            <img
                alt = "skill"
                src = {Image}
                loading  = {"lazy"}
                className = "skill-image"
            />
        </div>
        <div className = "activity">
            <div className = "skill-text">
                <div className = "skill-title">
                    What Fenley Does
                </div>
                <div className = "skill-description">
                    I help <span>people</span>, <span>organization</span> and <span>corporation</span> building their presence online, 
                    by making beautiful, modern and scalable <span>websites and web aplications</span>. Building <span>new strategies of sell</span> - for reaching prospective consumers and 
                    turning them into customers of their products or services.
                <br/><br/>
                    {
                        //<span className = "question">What is a better exposure than your own website? </span>
                    }
                    A great website reveals 
                    information about the current and future status of the company and the products that you want to enhance. 
                    Moreover, a website is an act of commitment, showing people that you really want to engage, to stay in the
                    game and make more profits, Whitout media socials - <span className = "amazon">Amazon</span> was still huge. <br/>
                    I don not want to say that media socials are not important, it's far away. 
                    There are tools that we can use to even make your business bigger, as example to increase traffic to your website by running ads and publication.
                <br/><br/>
                    If my focus is on helping people or companies building or consolidate their brand using the 
                    latest tecnologies and innovative strategies which allow them to duplicate or increase their income X times.  
                    If you are a restaurant, a brewery, tattoo parlor or anything else, we can definitely build something cool. 
                    <br/> <br/>
                    I'm all about meeting new people. Even if you just have some questions or just want to chat, reach out.
                    <br/><br/>
                    Fenley Ménélas
                    <br/><br/>
                    <span className = "ps">
                        PS: <span>Non Profits Organizations</span>, <span>Women Entrepreneurs</span> and <span>Young Entrepreneur</span> are automatically qualify for a <span className = "discount">10 up to 30%</span> discount.  
                    </span>
                </div>
            </div>
            <div className = "activity-image">
                <img
                    alt = "skill"
                    src = {Avatar}
                    loading  = {"lazy"}
                    className = "avatar-image"
                />
            </div>
        </div>
        <div className = "who-i-work-container">
            <div className = "who-i-work">
                <Collective/>
                <WhoIworkWith/>
            </div>
        </div>
    </div>
)

export default Skill