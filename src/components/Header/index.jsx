import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import icFav from "../../assets/like_stroke.svg"
import icProf from "../../assets/user-solid.svg"

import { UserCtx } from "../Context/UserContext";


const Header = ({likes}) => {
    const {user} = useContext(UserCtx);

    return(
        <header>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/addpost">Добавить пост</Link>
                <Link to="/cart">Команда</Link>
                {/* <Link to="/favorites">
                    <img src={icFav} alt="Избранное"/>
                    <span className="like">{likes}</span> 
                </Link> */}
                <Link to={user ? "/Profile" : "/Signin"}>
                    <img src={icProf} alt="Войти в личный кабинет"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;