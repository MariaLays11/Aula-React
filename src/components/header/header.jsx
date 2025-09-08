import { Link } from "react-router-dom";
import "../../components/header/header.css"

const Header = () => {
    return(
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                <li>
                        <Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;