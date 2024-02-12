import "./Header.scss"

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo">Logo</div>

            <nav className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="user">
                User
            </div>

        </header>
    )
}

export default Header