import React, {useState, useContext, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCtx } from "../components/Context/UserContext";
import api from "../Api";
import "../index.css";

export default () => {
    const navigate = useNavigate();
    const {setToken, setUser} = useContext(UserCtx);
    
    const logout = (e) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
        setToken("");
        setUser("");
    }

    return ( 
        <div className="profile">
            <div className="user__btn">
                <h1>Личный кабинет</h1>
                <span className="logout" onClick={logout}>Выйти</span>
            </div>
            
            <div className="user__card">
                <h2>Добро пожаловать</h2>
                <img src="https://img5.goodfon.ru/wallpaper/nbig/6/ba/romashki-nebo-fon.jpg" alt="Добро пожаловать!" />
            </div>
        </div>
    )
}
