const Nav = ()=>{
    return(
        <div className = "nav-container">
            <div className = "logo-container">
                <div className = "f-initial">F</div>
                <div className = "name-logo">Fenley</div>
                <div className = "logo-description-container">
                    <div className = "logo-description-item">Mern Stack</div>
                    <div className = "logo-description-item">Developer</div>
                </div>
            </div>
            <div className = "nav">
                <div className = "nav-item">
                    <span>About</span>
                </div>
                <div className = "nav-item">
                    <span>My Skills</span>
                </div>
                <div className = "nav-item">
                    <span>Work</span>
                </div>
                <div className = "nav-item">
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Nav;