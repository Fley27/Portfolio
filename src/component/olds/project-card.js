import alif_linguae from "../images/alif-linguae.png";
import solipresse from "../images/Screen Shot 2022-02-20 at 10.57.25 PM.png";
import wallet from "../images/wallet.jpeg";

const ProjectCard = () =>{
    return(
        <div className = "project">
            <div className = "project-card">
                <a className = "a" rel = "noreferrer" href = "https://alif-linguae.vercel.app/" target = "_blank">
                    <img alt = "alif" src = {alif_linguae} className = "card-image"/>
                    <div className = "overlay-card">
                        <div className = "project-card-container">
                            <h1 className = "project-card-title">Alif-linguae</h1>
                            <h4 className = "project-card-subtitle">Website</h4>
                            <a rel = "noreferrer" href = "https://github.com/Fley27/alif-linguae" target = "_blank" className = "project-card-description">https://github.com/Fley27/alif-linguae</a>
                        </div>
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a className = "a" rel = "noreferrer" href = "https://github.com/Fley27/wallet_credit_app" target = "_blank">
                    <img alt = "alif" src = {wallet} className = "card-image card-image-mobile"/>
                    <div className = "overlay-card">
                        <div className = "project-card-container">
                            <h1 className = "project-card-title">Credit Wallet</h1>
                            <h4 className = "project-card-subtitle">Mobile Application</h4>
                            <a rel = "noreferrer" href = "https://github.com/Fley27/wallet" target = "_blank" className = "project-card-description">https://github.com/Fley27/wallet</a>
                        </div>
                    </div>
                </a>
            </div>
            <div className = "project-card">
                <a className = "a" rel = "noreferrer" href = "https://github.com/Fley27/Soli-Writing" target = "_blank">
                <img alt = "alif" src = {solipresse} className = "card-image"/>
                    <div className = "overlay-card">
                        <div className = "project-card-container">
                            <h1 className = "project-card-title">Solipresse</h1>
                            <h4 className = "project-card-subtitle">Website</h4>
                            <a rel = "noreferrer" href = "https://fenley.netlify.app/" target = "_blank" className = "project-card-description">https://soli-writing.vercel.app/</a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;

/*
    <div className = "project-card-container">
                        <h1 className = "project-card-title">ALIF-Linguae</h1>
                    </div>
                    <div className = "project-card-description">
                        It's portal for a freelance translation & transcription agency. Take a look & don't hesitate to contact us in case that you need our services. 
                    </div>
*/