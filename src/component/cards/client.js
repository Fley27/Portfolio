import "../../styles/client-card.css";

const ClientCard = ({title, description, description2, to}) => (
    <div className = "client-card">
        <div className = "card-client-title">
            {title}
        </div>
        <div className = "client-card-description">
            {description}
        </div>
        <div className = "client-card-description">
            {description2}
        </div>
        <div onClick = {() => window.location.href = to} className = "read-more">
            Read More
        </div>
    </div>
)

export default ClientCard