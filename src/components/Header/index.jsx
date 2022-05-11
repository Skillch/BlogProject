import React,{useState} from "react";
import {Link} from "react-router-dom";

import "./index.css";

const Header = () => {
    return(
        <header>
            
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/catalog">Блог</Link>
                <Link to="/cart">Обо мне</Link>
                <Link to="/cart">Контакты</Link>
            </nav>
        </header>
    )
}

export default Header;