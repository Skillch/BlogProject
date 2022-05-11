import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import "./index.css";

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
        <>
            <h2>{post.title || "No name"}</h2>
            <p>{id}</p>
            <p>{}</p>
        </>
    )
};


export default Post;