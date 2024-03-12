import "./menustyle.css"
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">Home</Link>
            </nav>
            <nav className="menu">
                <Link to="/filmes" className="menu">Filmes</Link>
            </nav>
            <nav className="menu">
                <Link to="/diretores" className="menu">Diretores</Link>
            </nav>
            <nav className="menu">
                <Link to="/atores" className="menu">Atores</Link>
            </nav>
        </div>
    )
}