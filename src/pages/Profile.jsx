import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserCtx } from "../components/Context/UserContext";
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
            <h1>Личный кабинет</h1>
            <span className="logout" onClick={logout}>Выйти</span>
        </div>
    )
}
