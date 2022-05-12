import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import icFav from "../../assets/like_stroke.svg"
import icProf from "../../assets/user-solid.svg"

import { UserCtx } from "../Context/UserContext";


const Header = () => {
    const {user} = useContext(UserCtx);

    return(
        <header>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/">Блог</Link>
                <Link to="/">Обо мне</Link>
                <Link to="/">Контакты</Link>
                <Link to="/favorites">
                    <img src={icFav} alt="Избранное"/>
                </Link>
                <Link to={user ? "/Profile" : "/Signin"}>
                    <img src={icProf} alt="Войти в личный кабинет"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;