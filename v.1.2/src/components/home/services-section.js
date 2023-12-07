import Image from "next/image";
import services from '@/assets/images/services.jpg'
import Card from "../services/card";
import styles from "../../styles/home/services-section.module.css";

const ServicesSection = () => {
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={services}
                    alt="Picture of the author"
                    placeholder='blur'
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>With Whom Do We Work?</h1>
                </div>
                <div className={styles.services}>
                    <div className={styles.card}>
                        <Card 
                            title='Digital Artists and Creatives' 
                            description="More than ever, having a place to feature your artwork is very important. I still don't really know what an NFT is, but I can build you a website where you can sell them.
                            From prints to merchandise featuring your work, I can build whatever you need to make cash off of your creations."
                            link = '/services/small-business'
                        />
                    </div>
                    <div className={styles.card}>
                        <Card 
                            title='Content Creators, Models, and Athletes' 
                            description="If you create adult content on the Internet, you're probably well aware that you're at the mercy of whatever corporate overlord runs the site you're posting on.
                            Having a personal website gives you a chance to start creating something that you fully own."
                            link = '/services/small-business'
                        />
                    </div>
                    <div className={styles.card}>
                        <Card 
                            title='Small to Large Businesses' 
                            description="I like making money but I am also very particular about the businesses that I will work for. I like coffee, alcohol, and tattoos. I do not like building bland websites for boring corporations.
                            Priority will be given to small businesses."
                            link = '/services/small-business'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;