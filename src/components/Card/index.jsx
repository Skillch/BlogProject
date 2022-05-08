import React from "react";
import "./index.css";
const Card = (props) => {   
    let stile = {  
        backgroundImage: `url(${props.pic})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"#fff"
    };
    return (
        <div className="card">
            {/*
                    background-image
                        + ставиться именно так, как нам надо.
                        - картинка не является картинкой
                    img
                        + это картинка
                        -кривая
            */}
            
            <div className="card__img" style={stile}></div>
            <div className="card__price">{props.price}</div>
            <div className="card__text">{props.name}</div>
        </div>
    )
}

export default Card;