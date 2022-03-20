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
                title = "Landing Page"
                description = "The first thing I'll build will be the landing page. This is the first thing visitors will see when they visit your page."
                description2 = "There are several options for this but generally most musicians will want something that fits the feel of their current album release."
            />
            <ProcessCard
                title = "Socials Page"
                description = "This page will consolidate all of your social links in one place so it's easy for any of your fans to find your social media content. It can include links to anything you would like - Spotify, YouTube, Instagram. Anything you want."
            />
            <ProcessCard
                title = "Media Page"
                description = "The Media page can serve as a place for visitors to listen to your music or check out any video content you have released."
                description2 = "With each track we can also link up to an external store that will give users a chance to purchase your music from your own online store or another platform (iTunes)."
            />
            <ProcessCard
                title = "Tour Schedule"
                description = "Touring is probably the most important thing you can do as a musician and you want to be able to let people know where they can catch you."
                description2 = "I can design this page and set it up so you can update it whenever you like."
            />
            <ProcessCard
                title = "Merch Store"
                description = "More than ever, merchandise sales for musicians is a great way to make some extra cash."
                description2 = "Using Shopify or WooCommerce, I can set up a fully functional online store that you can add items to yourself. Everything is fully customizable for quick price changes or stock updates"
            />
        </div>
    </div>
)

export default Process;