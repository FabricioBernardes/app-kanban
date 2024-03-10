import { useEffect, useState } from "react"
import GetData from "../../services/getData"
import { useParams } from "react-router-dom"
import CreateList from "./createList/CreateList"
import Board from "../../interfaces/Board"
import List from "./List/List"
import "./Board.scss"

const Board = () => {
    const { boardId } = useParams();
    const [board, setBoard] = useState({} as Board);

    const fetchBoard = async () => {
        const data = await GetData(`boards/${boardId}`);
        setBoard(data);
    };
    
    useEffect(() => {
        fetchBoard();
    }, [boardId]);

    return (
        <div className="page-board">
            <h1 className="board-title">{board.title}</h1>
            <div className="lists-wrapper">

                {board.lists && board.lists.map((list) => (
                    <List key={list.id} list={list} onCardCreate={fetchBoard} />
                ))}

                <CreateList boardId={boardId || ""} onListCreate={fetchBoard} />
            </div>
        </div>
    )
}

export default Board