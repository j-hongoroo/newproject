import { Link } from "react-router-dom";
import './style.css'
import { AiOutlineHome } from 'react-icons/ai';

function Header() {
    return (  
        <div className="header">
            <Link to="/register">Бүртгүүлэх</Link>
            <Link to="/Tasks"><AiOutlineHome className="icon"/></Link>
            <Link to="/Login">Нэвтрэх</Link>
        </div>
    );
}

export default Header
