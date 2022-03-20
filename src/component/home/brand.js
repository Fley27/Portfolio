import Image from "../../images/beautiful-young-curly-brunette-darkskinned-woman-in-colorful-blouse-and-orange-sunglasses-listens-to-music-in-headphones-and-sings-outside-min.jpg"
import "../../styles/brand.css"

const Brand = () => (
    <div className = "brand">
        <div className = "brand-image-container">
            <img
                alt = "Brand"
                src = {Image}
                loading  = {"lazy"}
                className = "brand-image"
            />
        </div>
        <div className = "brand-text">
            <div className = "brand-title">
                BUILDING  YOUR  PERSONAL  BRAND
            </div>
            <div className = "brand-description">
            Building a brand online doesn't have to be that hard. Because you have billions of potential customers who are increasingly 
            used to spending money online, and just need a little motivation to spend it on you. My ultimate goal is to get these potential 
            customers to spend or invest their money in your brand. I want them to stay connected to the brand, engage with you on social media and 
            spend money when you release new content.
            <br/><br/>
            As an entrepreneur, I understand the time investment involved in always being on the go. 
            Let me take care of the website, and at the same time I will take the opportunity to automate 
            repetitive or recurring actions to save you time and energy while you do what you do best.
            </div>
        </div>
    </div>
)

export default Brand