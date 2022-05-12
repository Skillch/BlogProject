import React from "react";
import "../../index.css";

const Card = (props) => {
    let CardImg = {
        backgroundImage: `url(${props.data.image})`,
        // backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
    };

    return (
        <div className="post">
            <img className="imgpost" src={props.data.image}/>
            <span className="textpost">{props.data.title}</span>
            <span className="text__description">{props.data.text}</span>
            {/* <div className="card__img" style={CardImg}></div>
            <div className="card__date">{props.data.created_at}</div>
            <div className="card__title">{props.data.title}</div>
            <div className="card__author">{props.data.author.name}</div> */}
        </div>
        
    )
};

export default Card;