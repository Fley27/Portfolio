"use client";
import styles from '../../styles/services/card.module.css';

const Card = ({title, description, link}) => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles.button}>
                <a href={link}>LEARN MORE</a>
            </div>
        </div>
    )
}

export default Card;