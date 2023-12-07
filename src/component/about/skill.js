import React from "react";
import Collective from "../cards/collective"; 
import WhoIworkWith from "../who-i-work-with";
import Image from "../../images/girl-social-media-min.jpeg"
import Avatar from "../../images/avatar.png"
import "../../styles/skill-.css"

const Skill = () => (
    <>
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
                        I help <span>people</span>, and <span>corporation</span> building their presence online, 
                        by making beautiful, modern and scalable <span>websites and web aplications</span>. 
                        <br/>
                        Also Build <span>new sales strategies</span> to reach potential consumers and turn them into real customers of 
                        your products or services.
                        <br/><br/>
                        {
                            //<span className = "question">What is a better exposure than your own website? </span>
                        }
                        A great website reveals information about the current and future status of the business and products you want to showcase. Also, a website is an act of engagement, 
                        showing people that you really want to engage, stay in the game and make more profit. 
                        We can say whitout social media <span className = "amazon">Amazon</span> was still huge. <br/>
                        By that I don't mean that social media is not important, far from it. 
                        They are tools that you can use to grow your business, 
                        for example to increase traffic to your website by running ads and posts.
                    <br/><br/>
                        If my focus is is to help people or businesses build or strengthen their brand by using the latest technologies and innovative strategies that allow them to duplicate or increase their revenue X times. 
                        If you are an organization or any kind of non-profit intance, we can definitely build something cool. 
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
    </>
)

export default Skill