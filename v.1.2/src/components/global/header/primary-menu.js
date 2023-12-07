import styles from "../../../styles/global/header/primary-menu.module.css";


const PrimaryMenu = () => {
    return(
        <div className= {styles.container}>
            <h1 className = {styles.logo}>FENLEY MENELAS</h1>
            <div className = {styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className= {styles.hamburger}>
                <div className = {styles.line}></div>
                <div className = {styles.line}></div>
                <div className = {styles.line}></div>
            </div>
        </div>
    )
}

export default PrimaryMenu;