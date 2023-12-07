import styles from '../../styles/global/footer/footer.module.css';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>CONTACT FENLEY MENELAS</h1>
                </div>
                <div className={styles.email}>
                    <span>EMAIL:</span> <a href='mailto:fenleymenelas@gmail.com'>fenleymenelas@gmail.com</a>
                </div>
                <div className={styles.phone}>
                    <span>PHONE:</span> <a href='tel:1-561-502-1579'>561-502-1579</a>
                </div>
                <div className={styles.bar}></div>
                <div className={styles.copyright}>Copyright 2023 © <span>Fenley Ménélas</span></div>
            </div>
        </div>
    )
}

export default Footer;