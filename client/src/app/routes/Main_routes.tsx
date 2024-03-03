import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Board from './board/Board'

const Main_routes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/board/:boardId" element={<Board />} />
            <Route path="/contact" element={<h1>Contact</h1>} />

        </Routes>
    )
}

export default Main_routes