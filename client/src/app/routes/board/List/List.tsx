import { useState } from "react"
import CreateCard from "../createCard/CreateCard"
import List from '../../../interfaces/List'
import CardSummary from "../cardSummary/CardSummary"
import DeleteData from "../../../services/deleteData"
import { MoreVertical } from "react-feather"
import "./List.scss"

const List = ({ list, onCardCreate }: {list: List, onCardCreate: () => void}) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const cardsLength = list.cards.length;

    const handleDeleteList = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await DeleteData(`lists/${list.id}`)
            onCardCreate()
        }catch (error) {
            console.log(error)
        }        
    }

    return (
        <div key={list.id} className="board-list">

            <div className="list-head">
                <h2 className="list-title">{list.title}</h2>

                <div className="options-wrapper">
                    <MoreVertical
                        className="option-icon"
                        onClick={() => setOptionsOpen(!optionsOpen)}
                    />
                    <div className={`list-options ${optionsOpen ? "-show" : ""}`}>
                        <button onClick={handleDeleteList}>Excluir lista</button>
                    </div>
                </div>
            </div>

            <div className="cards-wrapper">
                {list.cards && list.cards.map((card) => (
                    <CardSummary
                        key={card.id}
                        cardSummary={card}
                        onCardCreate={onCardCreate}
                    />
                ))}
            </div>

            <CreateCard listId={list.id} position={cardsLength + 1} onCardCreate={onCardCreate} />
        </div>
    )
}

export default List