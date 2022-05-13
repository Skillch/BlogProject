import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preheader from "./components/Preheader";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Post from "./components/Post";


const App = () => {
    const [searchText, changeText] = useState("");

    return (
        <div className="container">
            <Header />
            <Preheader />
            <Routes>
                <Route path="/" element={<Home search={searchText} changeText={changeText}/>} />
                <Route path="/post/:id" element={<Post />}/>
                <Route path="/catalog" element={<Catalog  />}/>
                <Route path="/cart" element={<Cart />} />
            </Routes>          
            <Footer />
        </div>
    )
}

export default App;

