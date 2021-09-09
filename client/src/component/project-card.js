import credit from "../images/credit.jpg";
import portrait from "../images/portrait.jpg"
const ProjectCard = () =>{
    return(
        <div className = "project">
            <div className = "project-card">
                <a href = "https://alif-lingua.herokuapp.com" target = "_blank">
                    <div className = "img-background">
                        <img src = {"https://alif-lingua.herokuapp.com/images/executive-business-woman-office-1.jpeg"}/>
                    </div>
                    <div className = "overlay-project">
                        <div className = "overlay-title">Alif</div>
                        <div className = "overlay-description">
                            It is my own project. It's a portfolio for my translation & transcription agency. Please take a look & don't hesitate to contact us in case that you need our services. 
                            Thank you. 
                        </div>
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a href = "https://github.com/Fley27/wallet_credit_app" target = "_blank">
                    <div className = "img-background">
                        <img src = {credit}/>
                    </div>
                    <div className = "overlay-project">
                        <div className = "overlay-title">Credit Wallet App</div>
                        <div className = "overlay-description">
                            It also a personal application native mobile application building with React Native. It was only created for my personal need.
                            To track my expenses, my incomes, my borrowing and loan. Take a look in the repository in github.
                        </div>
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a href = "https://github.com/Fley27/My_Porfolio" target = "_blank">
                    <div className = "img-background">
                        <img src = {portrait}/>
                    </div>
                    <div className = "overlay-project">
                        <div className = "overlay-title">This Portfolio</div>
                        <div className = "overlay-description">Check the github repository of this portfolio.</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;