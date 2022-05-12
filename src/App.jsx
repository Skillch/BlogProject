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

import { UserCtx, UserValue } from "./components/Context/UserContext";


const App = () => {
    const [searchText, changeText] = useState("");

    return (
        <UserCtx.Provider value={UserValue}>
            <div className="container">
                <Header />
                <Preheader />
                <Routes>
                    <Route path="/" element={<Home search={searchText} changeText={changeText}/>} />
                    <Route path="/post/:id" element={<Post/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/signup" element={<Signup/>} />
                </Routes>          
                <Footer />
            </div>
        </UserCtx.Provider>
    )
}

export default App;

