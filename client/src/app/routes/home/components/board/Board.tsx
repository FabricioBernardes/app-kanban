import { Link } from "react-router-dom"
import BoardSummary from "../../../../interfaces/BoardSummary";
import "./Board.scss"

const Board = ({title, id}: BoardSummary) => {
    return (
        <div className="board-item">
            <Link to={`/board/${id}`}>{title}</Link>
        </div>
    )
}

export default Board