import { useEffect, useState } from "react"
import GetData from "../../services/getData"
import Board from "./components/board/Board"
import NewBoard from "./components/newBoard/NewBoard"
import BoardSummary from "../../interfaces/BoardSummary"
import './Home.scss'

const Home = () => {
    const [boards, setBoards] = useState([])

    const fetchBoards = async () => {
        const data = await GetData('boards')
        setBoards(data)
    }

    useEffect(() => {
        fetchBoards()
    }, [])

    return (
        <div className="home-wrapper">
            <div className="all-boards-container">
                <h1 className="title">Seus quadros</h1>
                <ul>
                    {boards.length && boards.map((board: BoardSummary) => (
                        <li key={board.id} >
                            <Board board={board} fetchBoards={fetchBoards} />
                        </li>
                    ))}
                    <NewBoard key="new-board" />
                </ul>
            </div>
        </div>
    )
}

export default Home