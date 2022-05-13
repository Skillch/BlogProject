import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preheader from "./components/Preheader";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Post from "./components/Post";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Addpost from "./pages/Addpost";
import Cart from "./pages/Command";

import { UserCtx, UserValue } from "./components/Context/UserContext";
import { FavCtx } from "./components/Context/FavContext";

const App = () => {
    const [searchText, changeText] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }
    const setFavorites = (obj) => {
        if (obj.likes.includes(user)){
            if (!favorites.includes(el => el._id === obj._id)) {
                console.log(obj.data._id)
                console.log(el.data._id)
                updFav([...favorites, obj]);
                }   
            }else{
                updFav(favorites.filter(el => el._id !== obj._id));
            }
        }
    

    return (
        <FavCtx.Provider value={{favorites: favorites, setFavorites: () => setFavorites }}>
            <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
                <div className="container">
                    <Header />
                    <Preheader />
                    <Routes>
                        <Route path="/" element={<Home search={searchText} changeText={changeText}/>} />
                        <Route path="/post/:id" element={<Post/>}/>
                        <Route path="/addpost" element={<Addpost />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/signin" element={<Signin/>} />
                        <Route path="/signup" element={<Signup/>} />
                    </Routes>             
                    <Footer />   
                </div>                
            </UserCtx.Provider>
        </FavCtx.Provider>
    )
}

export default App;

