import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="app-sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar