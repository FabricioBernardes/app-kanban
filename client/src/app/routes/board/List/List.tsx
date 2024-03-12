import CreateCard from "../createCard/CreateCard"
import List from '../../../interfaces/List'
import CardSummary from "../cardSummary/CardSummary"

import "./List.scss"
import ListHeader from "./ListHeader/ListHeader"

const List = ({ list, onCardCreate }: {list: List, onCardCreate: () => void}) => {
    const cardsLength = list.cards.length;

    return (
        <div key={list.id} className="board-list">

            <ListHeader list={list} onCardCreate={onCardCreate} />

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