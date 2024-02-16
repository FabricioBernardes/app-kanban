import { Link } from "react-router-dom"
import "./Board.scss"

const Board = ({title, id}) => {
    return (
        <div className="board-item">
            <Link to={`/boards/${id}`}>{title}</Link>
        </div>
    )
}

export default Board