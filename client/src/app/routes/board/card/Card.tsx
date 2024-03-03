import CardSummary from "../../../interfaces/CardSummary"
import "./Card.scss"

const Card = ({ card }: { card: CardSummary }) => {
    return (
        <div className="list-card">
            <h3 className="card-title">
                { card.title }
            </h3>
        </div>
    )
}

export default Card