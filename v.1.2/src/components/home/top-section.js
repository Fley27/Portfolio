import Image from 'next/image'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import styles from '../../styles/home/top-section.module.css'

const TopSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left_content}>
                    <h1 className={styles.title}>
                        Crafting Exceptional Websites 
                        and Web Applications to Propel 
                        Your Business to Success
                    </h1>
                    <p className={styles.description}>
                        With a high level of expertise, 
                        We specialize in crafting modern, 
                        lightning-fast, and scalable websites and applications. 
                        My focus is on empowering business clients to not only 
                        establish but also strengthen their online presence. 
                        I am dedicated to delivering digital solutions that 
                        go beyond the ordinary, helping my clients scaling their Revenue.
                    </p>
                    <div className={styles.button_container}>
                        <div className={styles.button}>
                            <a href="#contact">ABOUT ME</a>
                        </div>
                        <div className={styles.button}>
                            <a href="#contact">LET'S TALK</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right_content}>
                    <div className={styles.image}>
                        <Image
                            src={img1}
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
                    <div className={styles.image}>
                        <Image
                            src={img2}
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
                    <div className={styles.image}>
                        <Image
                            src={img3}
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
                </div>
            </div>
        </div>
    )
}

export default TopSection;