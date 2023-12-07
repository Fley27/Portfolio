import Image from "next/image";
import brand from '@/assets/images/brand.jpg'
import styles from "../../styles/home/brand.module.css";


const Brand = () => {

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={brand}
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
                    <h1>We Craft Your Unique Brand Identity</h1>
                </div>
                <div className={styles.description}>
                    <p>
                        In today's fiercely competitive business landscape, a website alone won't make your company stand out. 
                        Our firm specializes in creating a compelling brand identity that resonates with your audience. 
                        We understand that success requires more than just an online presence; it demands the crafting 
                        of a unique brand that encapsulates your values, vision, and offerings. By doing so, we ensure 
                        that your company becomes a distinct presence in the market, leaving an indelible mark in the 
                        minds of your customers. Our approach isn't solely about building a website; it's centered on 
                        crafting a brand that sets you apart from the competition and leaves a lasting impact.
                    </p>
                    <p>
                        We know the demands of a fast-paced lifestyle. Let us handle your online presence 
                        while automating repetitive tasks, so you can save valuable time and energy. 
                        Focus on what you do best, while we take care of the digital aspects to ensure your brand shines.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Brand;





