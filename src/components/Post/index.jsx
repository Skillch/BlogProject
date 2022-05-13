import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../../Api";
import "./index.css";
import iconUpd from "./img/pen-solid.svg";

const Post = () => {
    let {id} = useParams();
    const [name, setName] = useState("Post");
    const [idPost, setIdPost] = useState(0);
    const [post, setPost] = useState({});
    const [isFormPage, setStateFormPage] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        api.getSinglePost(id).then(ans => {
            console.log(ans);
            setPost(ans);
            setIdPost(ans._id);
            setName(ans.author.name)
        })
    }, []);

    const responseHandler = res => {
        return res.ok ? res.json() : res.statusText;
    }
    const onCLick = () => {
        setStateFormPage(true);
    }

    function onClickCancel(e) {
        e.preventDefault();
        setStateFormPage(false);
    }

    function onClickEdit(e) {
        e.preventDefault();
        fetch('https://api.react-learning.ru/posts/' + idPost, {
            method: 'PATCH',
            headers: {
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4YWZkOTcyNTA2OTFhZGU1OGMiLCJpYXQiOjE2NTI0NTc4MjYsImV4cCI6MTY4Mzk5MzgyNn0.btMVIi3oZyae6hsWUMTUdoHDiF7aYayOvDtmKypA0QU",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "text": text
            })
        })
            .then(responseHandler);
        setStateFormPage(false);
    }

    if (isFormPage) {
        return <>
            <form>
                <label>
                    Введите название:
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text"
                           name="name" placeholder={post.title}/>
                </label>
                <label>
                    Введите описание:
                    <input value={text} onChange={e => setText(e.target.value)}  type="text"
                           name="name" placeholder={post.text}/>
                </label>
                <button className="upd" type="submit" value="Submit" onClick={onClickEdit}> Edit</button>
                <button className="upd" type="submit" value="Submit" onClick={onClickCancel}> Cancel</button>
            </form>
        </>
    } else {
        return (
            <>
                <div className="cards">
                    <div className="card"><img className="imgOnePost" src={post.image}/>
                    </div>
                    <div className="card">
                        <h3>{post.title || "Отсутствует"}
                            <button className="upd" onClick={onCLick} data-tooltip="Редактировать"><img src={iconUpd}/>
                            </button>
                        </h3>
                        <p>{name}</p>
                        <p>{post.text || "Отсутствует"}</p>
                    </div>
                </div>
            </>
        )
    }
};
export default Post;
