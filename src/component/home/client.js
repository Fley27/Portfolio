import React from "react";
import { Helmet } from "react-helmet-async";
import ClientCard from "../cards/client";
import Image from "../../images/pretty-cheerful-curly-brunette-darkskinned-african-woman-in-oversized-purple-hoodie-smiles-and-touches-hair-outside-min.jpg"
import "../../styles/client.css"

const Client = () => (
    <>
        <Helmet>
                <meta name = "description" content = "Who I work with - Adult Performers and Content Creators
                    
                    - Social Media Influencers - Bands and Music Artists - Youtube and Twitch Content Creators -
                    Digita Artists and Photographers - Small to Large Businesses. " />
                <link rel = "canonical" href = "/book" />
            </Helmet>
        <div className = "client">
            <div className = "client-image-container animated-background">
                <img
                    alt = "client"
                    src = {Image}
                    loading  = {"lazy"}
                    className = "client-image"
                />
            </div>
            <div className = "client-cards">

                <div className = "client-title">
                    WHO  DO  I  BUILD  WEBSITES  FOR?
                </div>
                <ClientCard
                    title = "Adult  Performers  and  Content  Creators"
                    description = "If you create adult content on the Internet, you're probably well aware that you're at the mercy of whatever corporate overlord runs the site you're posting on."
                    description2 = "Having a personal website gives you a chance to start creating something that you fully own."
                    to = "/adult-performer-and-content-creators"
                />
                <ClientCard
                    title = "Social  Media  Influencers"
                    description = "As an influencer, you are always chasing that next viral hit. Trust me, as someone with a decent following on Twitter, I can relate."
                    description2 = "What you tend to not have as an influencer is time to promote yourself off of your site of choice. With a personal website you can direct your fans to a place to fully interact with your brand."
                    to = "/social-media-influencers"
                />
                <ClientCard
                    title = "Bands  and  Music  Artists"
                    description = "I love building websites for musicians and bands. I thrive on taking every single aspect of your sound and putting it into the design of your website."
                    description2 = "If your fans are looking for music, videos, merchandise, social links, and tour dates. Your site will have it all."
                    to = "/bands-music-artists"
                />
                <ClientCard
                    title = "Youtube  and  Twitch  Content  Creators"
                    description = "As someone who used to be a streamer, I understand the struggle. You need to be online, you need to be networking, and you need to be on at all times."
                    description2 = "With a website you have a place to post your schedule, bio, and whatever else your community has going on."
                    to = "/youtube-and-twitch-content-creators"
                />
                <ClientCard
                    title = "Digital  Artists  and  Photographers"
                    description = "More than ever, having a place to feature your artwork is very important. I still don't really know what an NFT is, but I can build you a website where you can sell them."
                    description2 = "From prints to merchandise featuring your work, I can build whatever you need to make cash off of your creations."
                    to = "/digital-artists-and-photographers"
                />
                <ClientCard
                    title = "Small  to  Large  Businesses"
                    description = "I like making money but I am also very particular about the businesses that I will work for. I like coffee, alcohol, and tattoos. I do not like building bland websites for boring corporations."
                    description2 = "Priority will be given to small businesses."
                    to = "/small-to-large-businesses"
                />
            </div>
        </div>
    </>
)

export default Client;