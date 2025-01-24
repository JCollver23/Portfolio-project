
import { Link } from "react-router-dom";
import './style.css';

export default function NavBar() {
    return (
        <div className="nav_container">
            <h1 className="logo">Jess Collver</h1>
            <nav>
                <ul>
                    <li><Link className="nav_link" to="/">Home</Link></li>
                    <li><Link className="nav_link" to="/about">About Me</Link></li>
                    <li><Link className="nav_link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="nav_link" to="/resume">Resume</Link></li>
                    <li><Link className="nav_link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

