import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="app-sidebar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar