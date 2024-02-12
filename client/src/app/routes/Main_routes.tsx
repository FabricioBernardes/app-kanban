import { Routes, Route } from 'react-router-dom'

const Main_routes = () => {
    return (
        <Routes>

            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />

        </Routes>
    )
}

export default Main_routes