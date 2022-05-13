import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import "./index.css";
import iconUpd from "./img/pen-solid.svg";

const Post = () => {
    let {id} = useParams();
    const [name, setName] = useState("Post");
    const [post, setPost] = useState({});

    useEffect(()=> {
        api.getSinglePost(id).then(ans => {
            console.log(ans);
            setPost(ans);
        })
    }, []);

    return (
        <><div className="cards">
        <div className="card"><img className="imgOnePost" src={post.image}/>
        </div>
        <div className="card">
            <h3>{post.title || "Отсутствует"}<button className="upd" onClick="updateRow(this)" data-tooltip="Редактировать"><img src={iconUpd}/></button></h3>
            <p>{id}</p>
            <p>{post.text || "Отсутствует"}</p>
            </div>
            </div>
        </>
    )
};


export default Post;