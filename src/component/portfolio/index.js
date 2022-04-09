import styles from "../../styles/porfolio.module.css";
import Card from "./card";

const Portfolio = () => (
    <div className = {styles.container}>
        <div className = {"first-step-title"}><span></span> <p>A showcase of all the MVPs of the projects I've been working on lately</p></div>
        <Card
            grade = "Website"
            title = "Alif Linguae"
            description = "Professional translation and transcription services at the speed of your business in over languages by qualified native speaker with high linguistic background."
            link = "https://alif-linguae.vercel.app"
        />
        <Card
            grade = "Website"
            title = "LHSSF"
            description = "Learn to speak Spanish fluently with experienced teachers who have developed precise strategies while learning foreign languages like you."
            link = "https://lhssf.netlify.app/"
        />
        <Card
            grade = "REST Api"
            title = "Solipresse"
            description = "Building Using ExpressJS, Mongoose and Websocket, speacifically Socket.Io that makes it possible to open a two-way interactive communication session between the user's and the server."
            link = "https://github.com/Fley27/solipresse-backend"
        />
        <Card
            grade = "Website"
            title = "Solipresse"
            description = "Builded with NextJS, Redux, Socket.Io, CSS3"
            link = "https://soli-writing.vercel.app/"
        />
    </div>
)

export default Portfolio;
