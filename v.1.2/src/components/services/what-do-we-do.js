import Image from 'next/image';
import gender_fluid from '@/assets/images/gender-fluid-people-posing.jpg'
import styles from "@/styles/services/what-do-we-do.module.css";


const WhatDoWeDo = () => {
    return(
        <div className={styles.container}>
            {
                /*
                <div className={styles.image}>
                    <Image
                        src={gender_fluid}
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
                */
            }
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>WHAT DO WE DO?</h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.item_title}>
                            Web Development
                        </div>
                        <div className={styles.item_bar}></div>
                        <div className={styles.item_description}>
                            We design websites and web applications for our clients. We use the latest technologies to build websites that are fast, responsive, and secure.
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_title}>
                            Marketing Strategy
                        </div>
                        <div className={styles.item_bar}></div>
                        <div className={styles.item_description}>
                            We design websites and web applications for our clients. We use the latest technologies to build websites that are fast, responsive, and secure.
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_title}>
                            Software Translation
                        </div>
                        <div className={styles.item_bar}></div>
                        <div className={styles.item_description}>
                            We design websites and web applications for our clients. We use the latest technologies to build websites that are fast, responsive, and secure.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WhatDoWeDo;