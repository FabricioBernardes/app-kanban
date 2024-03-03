import { useEffect, useState } from "react"
import GetData from "../../services/getData"
import { useParams } from "react-router-dom"
import "./Board.scss"
import CreateList from "./createList/CreateList"
import Board from "../../interfaces/Board"
import List from "./List/List"

const Board = () => {
    const { boardId } = useParams();
    const [newList, setNewList] = useState("");
    const [newCard, setNewCard] = useState("");
    const [board, setBoard] = useState({} as Board);

    useEffect(() => {
        const fetchBoards = async () => {
            const data = await GetData(`boards/${boardId}`);
            setBoard(data);
        };
        fetchBoards();
    }, [newList, newCard, boardId]);

    return (
        <div className="page-board">
            <h1 className="board-title">{board.title}</h1>
            <div className="lists-wrapper">

                {board.lists && board.lists.map((list) => (
                    <List key={list.id} list={list} onCardCreate={setNewCard} />
                ))}

                <CreateList boardId={boardId || ""} onListCreate={setNewList} />
            </div>
        </div>
    )
}

export default Board