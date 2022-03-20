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
                description = "The very first thing we do is a consultation to figure out what your goals are as a content creator and what kind of aesthetic you want to go for."
                description2 = "You can choose to do the consultation with myself or my wife, if working with a woman makes you more comfortable."
            />
            <ProcessCard
                title = "Design Phase"
                description = "In this phase I will create a mockup of the page based on your consultation."
                description2 = "Before anything is coded, we will go over this design and you can decide if you would like to make any changes. Everything is pretty fluid at this point and it's very easy to implement any changes you'd like to make."
            />
            <ProcessCard
                title = "Online Store"
                description = "Generally most adult content creators want to set up some form of eCommerce to sell merchandise and content in."
                description2 = "By using Shopify or WooCommerce, we can set up an online store that will be very easy for you update when you take full ownership of the site. I will also take time to go over how to maintain the store (add items, change prices, etc.) over video call when the site is up and running."
            />
            <ProcessCard
                title = "Socials Page"
                description = "On this page we will consolidate all of your social media accounts and set it up to serve as a portal to all of the sites you release content on"
                description2 = "What's nice about this is that if you happen to get banned on a certain site, you can let everyone that follows you know what happened."
            />
            <ProcessCard
                title = "Blog and Content Posting"
                description = "A blog is a great way for you to interact with your fans and tease upcoming content. I have found that those creators that post on a blog, found it much easier to convert visitors into suscribers."
                description2 = "All of our blogs are based on WordPress which makes it very easy for you to post photosets and videos on."
            />
            <ProcessCard
                title = "Confidentiality & Safety"
                description = "To make the process of building your website as comfortable as possible, I offer the option of dealing with other individuals of a specific gender identity or sexual orientation for any communication. Straight men on the Internet can be weird, so there's no hard feelings if this is something you would prefer."
                description2 = "I also offer a guarantee of confidentiality. I will not tell anyone that I built a website for you, unless you say it is specifically ok to do so."
            />
        </div>
    </div>
)

export default Process;