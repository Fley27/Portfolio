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
                title = "Building Community"
                description = "Any successful streamer will tell you that building a community is one the most important things you should focus on."
                description2 = "When I build a site for a content creator, I will also setup a discord server that will serve as a companion to the site."
            />
            <ProcessCard
                title = "Online Store"
                description = "Brand building for influencers often ties into a product that your fans will want to purchase."
                description2 = "By using Shopify or WooCommerce, we can set up an online store that will be very easy for you update when you take full ownership of the site. I will also take time to go over how to maintain the store (add items, change prices, etc.) over video call when the site is up and running."
            />
            <ProcessCard
                title = "Brands and Partnerships"
                description = "Whether it's a Creator Code or a partnership with an energy supplement company, you want a place that people can visit to purchase through your affiliate links."
                description2 = "I can create multiple pages or place all of these one 1 page to make it easier for all of your fans to support you."
                description3 = ""
            />
            <ProcessCard
                title = "Networking"
                description = "A big part of becoming a successful content creator is networking. I will set up a networking hub that other creators can use to contact you for collaborations."
                description2 = "We can also use this page to display a stream team of other creators you work closely with for combined growth."
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