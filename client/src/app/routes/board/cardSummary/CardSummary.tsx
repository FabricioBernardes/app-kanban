import CardSummary from "../../../interfaces/CardSummary"
import { useState, useEffect } from "react"
import GetData from "../../../services/getData"
import DeleteData from "../../../services/deleteData"
import Card from "../../../interfaces/Card"
import "./CardSummary.scss"
import CardModal from "../cardModal/CardModal"

const CardSummary = ({ cardSummary, onCardCreate }: { cardSummary: CardSummary, onCardCreate: () => void }) => {
    const [openCard, setOpenCard] = useState(false);
    const [card, setCard] = useState({} as Card);

    const fetchCardData = async () => {
        const data = await GetData(`cards/${cardSummary.id}`);
        setCard(data);
    };

    useEffect(() => {
        if (Object.keys(card).length > 0){
            setOpenCard(true);
        }
    }, [card]);

    const handleDeleteCard = async (e: React.MouseEvent) => {
        e.stopPropagation();
        await DeleteData(`cards/${cardSummary.id}`);
        onCardCreate();
    };

    return (
        <>
            <div className="card-summary" onClick={fetchCardData}>
                <h3 className="card-title">
                    { cardSummary.title }
                </h3>
                <span
                    className="delete-card"
                    onClick={handleDeleteCard}
                >
                    Excluir card
                </span>
            </div>
            { openCard && <CardModal card={card} closeCard={setOpenCard} updateCard={fetchCardData} /> }
        </>
    )
}

export default CardSummary