import CardSummary from "../../../interfaces/CardSummary"
import { useState, useEffect } from "react"
import GetData from "../../../services/getData"
import Card from "../../../interfaces/Card"
import "./CardSummary.scss"
import CardModal from "../cardModal/CardModal"

const CardSummary = ({ cardSummary }: { cardSummary: CardSummary }) => {
    const [openCard, setOpenCard] = useState(false);
    const [card, setCard] = useState({} as Card);

    const fetchCardData = async () => {
        console.log(card);
        const data = await GetData(`cards/${cardSummary.id}`);
        setCard(data);
    };

    useEffect(() => {
        if (Object.keys(card).length > 0){
            setOpenCard(true);
        }
    }, [card]);

    return (
        <>
            <div className="card-summary" onClick={fetchCardData}>
                <h3 className="card-title">
                    { cardSummary.title }
                </h3>
            </div>
            { openCard && <CardModal card={card} closeCard={setOpenCard} /> }
        </>
    )
}

export default CardSummary