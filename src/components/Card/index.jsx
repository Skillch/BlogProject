import React, { useState, useContext }  from "react";
import "../../index.css";
import likeTrue from "../../assets/like_fill copy.svg";
import likeFalse from "../../assets/like_stroke copy.svg";
import { useNavigate } from "react-router-dom";
import api from "../../Api";
import { UserCtx } from "../Context/UserContext";
import { FavCtx } from "../Context/FavContext";


const Card = (props) => {
    const {setFavorites} = useContext(FavCtx);
    const {user} = useContext(UserCtx);
    const [like, setLike] = useState(props.data.likes.includes(user));
    const navigate = useNavigate();

    const likeHandler = (e) => {
        e.stopPropagation();
        setLike(!like);
        api.setPostLike(props.data._id, like)
            .then(ans => {
                // console.log(ans);
                setFavorites(ans);
            })
    }
    const replaceHandler = (el) => {
        navigate(`/post/${props.data._id}`);
    }

    return (
        <div className="post" onClick={replaceHandler}>
            <img className="imgpost" src={props.data.image}/>
            <span className="textpost">{props.data.title}</span>
            <span className="text__description">{props.data.text}</span>
            <img className="text__like" src={like ? likeTrue : likeFalse}
             onClick={likeHandler}
            />
        </div>
        
    )
};

export default Card;