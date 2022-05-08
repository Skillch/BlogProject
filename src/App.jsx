import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preheader from "./components/Preheader";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";


const App = () => {
    return (
        <div className="container">
            <Header />
            <Preheader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog  />}/>
                <Route path="/cart" element={<Cart />} />
                </Routes>
            {/* <Card /> */}
            {/* {dataCards} */}
            
            <Footer />
        </div>
    )
}

    export default App;
// export default () => {
    
//     return <>
//         <h1>Hello React!</h1>
//     </>
// }
