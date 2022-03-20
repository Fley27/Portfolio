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
                description = "Through our initial consultation, we can sit down and go over what you would like to accomplish with your personal site. Do you want it to be a hub for long form blogs or a store that your followers can use to purchase your products?"
                description2 = ""
            />
            <ProcessCard
                title = "Design Phase"
                description = "In this phase I will create a mockup of the page based on your consultation."
                description2 = "Before anything is coded, we will go over this design and you can decide if you would like to make any changes. Everything is pretty fluid at this point and it's very easy to implement any changes you'd like to make."
            />
            <ProcessCard
                title = "Online Store"
                description = "Brand building for influencers often ties into a product that your fans will want to purchase."
                description2 = "By using Shopify or WooCommerce, we can set up an online store that will be very easy for you update when you take full ownership of the site. I will also take time to go over how to maintain the store (add items, change prices, etc.) over video call when the site is up and running."
            />
            <ProcessCard
                title = "Socials Page"
                description = "On this page we will consolidate all of your social media accounts and set it up to serve as a portal to all of the sites that you post content on."
                description2 = "This allows you to start building a following on another site without having to always notify your followers of all your different accounts"
                description3 = "Simply point them to this page and they will be able to follow you everywhere!"
            />
            <ProcessCard
                title = "Blog and Content Posting"
                description = "Blogs are a great way for influencers to build on their brand with long form content. It's hard to really say what you want in each social post, so it's nice for your followers to have a place where they can get to know you better."
                description2 = "All of our blogs are based on WordPress which makes it very easy for you to post and edit content."
            />
            <ProcessCard
                title = "Going Live"
                description = "When I hand over the site, I'll go over how you can post your own content and make small adjustments to the page."
                description2 = "Any big changes, you'll probably want to ask me about prior to making them. Don't stress about about it too much, If something breaks on your site I'll always be available to fix it."
            />
        </div>
    </div>
)

export default Process;