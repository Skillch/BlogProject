import React, {useState} from "react";
import "../index.css";

export default ({update}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [img, setImg] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        setTitle("");
        setText("");
        let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4Y2ZkOTcyNTA2OTFhZGU1OGQiLCJpYXQiOjE2NTE2ODMxNzEsImV4cCI6MTY4MzIxOTE3MX0.QQJX5-wGjKoAiCDQlTeE194zu1ey01YdzCnrHHAdQLg";
        let body = {
            "title": title,
            "text": text
        }
        if (img) {
            body.image = img
        }
        fetch("https://api.react-learning.ru/posts", {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(ans => {
                console.log(ans);
                update(prev => [...prev, ans]);
            })
    }

    return <div className="fon__body">
        <h1 className="Dobavit__Post">Добавить пост</h1>
        <form className="Form__addPost" onSubmit={sendForm}>
            <input className="input__Post" placeholder="Название поста" value={title} onInput={e => setTitle(e.target.value)}/>
            <textarea placeholder="Пост" value={text} onInput={e => setText(e.target.value)}/>
            <input className="input__Post"placeholder="Картинка" value={img} onChange={e => setImg(e.target.value)}/>
            <button className="btn__addpost" type="submit">Добавить пост</button>
        </form>
    </div>
}

