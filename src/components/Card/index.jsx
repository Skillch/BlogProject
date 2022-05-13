import React, { useState }  from "react";
import "../../index.css";
import likeTrue from "../../assets/like_fill copy.svg";
import likeFalse from "../../assets/like_stroke copy.svg";
import { useNavigate } from "react-router-dom";


const Card = (props) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
    // const likeHandler = (e) => {
    //     e.stopPropagation();
    //     setLike(!like);
    // }
    const replaceHandler = (e) => {
        navigate(`/product/${e._id}`);
    }

    return (
        <div className="post" onClick={replaceHandler}>
            <img className="imgpost" src={props.data.image}/>
            <span className="textpost">{props.data.title}</span>
            <span className="text__description">{props.data.text}</span>
            <img className="text__like" src={like ? likeTrue : likeFalse}
            //  onClick={likeHandler}
             />
        </div>
        
    )
};

export default Card;