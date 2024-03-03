import CardSummary from "../../../interfaces/CardSummary"
import "./CardSummary.scss"

const CardSummary = ({ card }: { card: CardSummary }) => {
    return (
        <div className="card-summary">
            <h3 className="card-title">
                { card.title }
            </h3>
        </div>
    )
}

export default CardSummary