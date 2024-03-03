import { useState, useEffect } from "react"
import CreateCard from "../createCard/CreateCard"
import List from '../../../interfaces/List'
import Card from "../card/Card"
import "./List.scss"

const List = ({ list, onCardCreate }: {list: List, onCardCreate: string}) => {
    const cardsLength = list.cards.length;
    return (
        <div key={list.id} className="board-list">
            <h2 className="list-title">{list.title}</h2>

            {list.cards && list.cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}

            <CreateCard listId={list.id} position={cardsLength + 1} onCardCreate={onCardCreate} />
        </div>
    )
}

export default List