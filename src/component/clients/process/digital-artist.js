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
                description = "The very first thing we do is a consultation to decide the best method to show your work and what you would like to accomplish with your personal site."
                description2 = "Digital artists tend to prefer a gallery to showcase their work, while photographers like a blog that allows them to write some text about the shoot. Either way, it is your choice and this is the step where we can decide what you would like to go with."
            />
            <ProcessCard
                title = "Design Phase"
                description = "In this phase I will create a mockup of the page based on your consultation. Before anything is coded, we will go over this design and you can decide if you would like to make any changes."
                description2 = "I have found that many digital artists and photographers are very particular about the aesthetic of the site and I am 100% open to suggestion."
            />
            <ProcessCard
                title = "Online Store"
                description = "I have found that digital artists love the ability to sell their work online, and they can make some good cash doing it. Whether you are selling prints, stickers, or merchandise with your work on it, I can build you something that will keep that cash coming in."
                description2 = "I can set up an online store that you have full control over. You can add items as you receive them, take preorders, and put items on sale with a quick click of a button."
            />
            <ProcessCard
                title = "Socials Page"
                description = "On this page we will consolidate all of your social media accounts and set it up to serve as a portal to all of the sites you release content on. I can also set it up so we automatically pull in your Instagram posts to display automatically."
                description2 = "This is also a great asset for photographers who post to stock photo sites, and would like to give people the chance to check out their publically available work."
            />
            <ProcessCard
                title = "Blog and Content Posting"
                description = "The story behind the work is always one of the most interesting things about creating content. Your fans and customers want to know how the process and a blog gives you a chance to write about it."
                description2 = "This is also great for photographers because it gives their clients the ability to direct their friends to a specific blog post to see the photos from their session."
            />
        </div>
    </div>
)

export default Process;