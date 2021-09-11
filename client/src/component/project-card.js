import credit from "../images/credit.jpg";
import portrait from "../images/portrait.jpg"
const ProjectCard = () =>{
    return(
        <div className = "project">
            <div className = "project-card">
                <a href = "https://alif-lingua.herokuapp.com" target = "_blank">
                    <div className = "project-card-container">
                        <h1 className = "project-card-title">ALIF</h1>
                        <h3  className = "project-card-subtitle">Linguae Services</h3>
                    </div>
                    <div className = "project-card-description">
                        It's portal for a freelance translation & transcription agency. Take a look & don't hesitate to contact us in case that you need our services. 
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a href = "https://github.com/Fley27/wallet_credit_app" target = "_blank">
                    <div className = "project-card-container">
                        <h1 className = "project-card-title">Credit Wallet</h1>
                    </div>
                    <div className = "project-card-description">
                        It is a native mobile application building with React Native. It was created for tracking Expenses, Incomes, Borrowing and Loans.
                        Take a look at the Github's repository.
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a href = "https://github.com/Fley27/My_Porfolio" target = "_blank">
                    <div className = "project-card-container">
                        <h1 className = "project-card-title">Fenley</h1>
                    </div>
                    <div className = "project-card-description">
                        It is my personal website, build with from scratch with ReactJS, Redux, CSS.
                        Take a look at the Github's repository.
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;