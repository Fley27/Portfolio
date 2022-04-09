import styles from "../../styles/porfolio.module.css";
import Card from "./card";

const Portfolio = () => (
    <div className = {styles.container}>
        <div className = {styles.titleClass}><span></span> <p>A showcase of all the MVPs of the projects I've been working on lately</p></div>
        <Card   
            grade = "Website"
            title = "Alif Linguae"
            description = "Professional translation and transcription services at the speed of your business in over languages by qualified native speaker with high linguistic background."
            link = "course/basic"
        />
        <Card   
            grade = "Website"
            title = "LHSSF"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/intermediate"
        />
        <Card   
            grade = "Api"
            title = "Advanced Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/advanced"
        />
        <Card   
            grade = "Website"
            title = "Solipresse"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/business"
        />
    </div>
)

export default Portfolio;