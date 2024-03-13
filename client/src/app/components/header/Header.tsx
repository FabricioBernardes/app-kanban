import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/">
                <div className="logo">
                    Logo
                </div>
            </Link>

            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <div className="user">
                User
            </div>

        </header>
    )
}

export default Header