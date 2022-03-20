import React from "react";
import ProcessCard from "../../cards/process";
import "../../../styles/process.css"

const Process = () => (
    <div className = "process">
        <div className = "process-cards">
            <div className = "process-title">
                THE PROCESS
            </div>
            <ProcessCard
                title = "Consultation"
                description = "Working with businesses is a little different than working with individuals. We will start by sitting down and deciding what direction you would like to take with the design and work from there."
                description2 = "The website for your business should be an extension of what your business represents and I will always take the time to get this right."
            />
            <ProcessCard
                title = "Design Phase"
                description = "In this phase I will create a mockup of the page based on your consultation. Before anything is coded, we will go over the design and you can decide if you would like to make any changes."
                description2 = "If your business has used a graphic designer for brand cohesiveness, I am very open to working with them to make sure I get everything just right."
            />
            <ProcessCard
                title = "Online Store"
                description = "In the past year, eCommerce has absolutely exploded in popularity and I'm right there to help you out with whatever you might need."
                description2 = "As of right now, I am offering development on both the Shopify and WooCommerce platforms. Shopify builds are fairly easy unless you want something a little more custom. WooCommerce is based on WordPress and is very customizable."
            />
            <ProcessCard
                title = "Promotions"
                description = "Most businesses like to be able to advertise any promotions they may have going on and I make that easy for you."
                description2 = "Whether it's a separate page or a section on the main page, I can create something that is very easy to update when you have a new promotion or sale going on."
            />
            <ProcessCard
                title = "Delivery Service Implementation"
                description = "Blogs are a great way for influencers to build on their brand with long form content. It's hard to really say what you want in each social post, so it's nice for your followers to have a place where they can get to know you better."
                description2 = "All of our blogs are based on WordPress which makes it very easy for you to post and edit content."
            />
            <ProcessCard
                title = "Social Media Marketing"
                description = "I do offer social media marketing packages for businesses if that is something you would be interested in. I create content that generates traffic towards your website and handle any ad campaigns on social media to bring in more business."
                description2 = "For small businesses with a smaller budget, I have no problem going over how to start generating a following on social media. This would basically be a meeting where we can sit down and chat about how to create content for social media - It's included with your build, you just have to bring the White Claw."
            />
        </div>
    </div>
)

export default Process;