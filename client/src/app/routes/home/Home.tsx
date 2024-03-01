import { useEffect, useState } from "react"
import GetData from "../../services/getData"
import Board from "./components/board/Board"
import NewBoard from "./components/newBoard/NewBoard"
import BoardSummary from "../../interfaces/BoardSummary"
import './Home.scss'

const Home = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        const fetchBoards = async () => {
            const data = await GetData('boards')
            setBoards(data)
        }
        fetchBoards()
    }, [])

    return (
        <div className="home-wrapper">
            <div className="all-boards-container">
                <ul>
                    {boards.map((board: BoardSummary) => (
                        <li key={board.id} >
                            <Board title={board.title} id={board.id} />
                        </li>
                    ))}
                    <NewBoard key="new-board" />
                </ul>
            </div>
        </div>
    )
}

export default Home