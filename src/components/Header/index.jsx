import React,{useState} from "react";
import {Link} from "react-router-dom";

import "./index.css";

const Header = () => {
    return(
        <header>
            
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/addpost">Добавить пост</Link>
                <Link to="/cart">Команда</Link>
                {/* <Link to="/cart">Контакты</Link> */}
            </nav>
        </header>
    )
}

export default Header;