import { Link } from "react-router-dom"
import BoardSummary from "../../../../interfaces/BoardSummary";
import "./Board.scss"

const Board = ({title, id}: BoardSummary) => {
    return (
        <Link className="board-item" to={`/board/${id}`}>{title}</Link>
    )
}

export default Board