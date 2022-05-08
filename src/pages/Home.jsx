import React, {useState, useEffect} from "react";
import "../index.css"
const Home = () => {
    
        const [posts,getPosts] = useState([]);
        useEffect(() => {
           
                fetch("https://api.react-learning.ru/posts", {
                    headers: {
                        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4Y2ZkOTcyNTA2OTFhZGU1OGQiLCJpYXQiOjE2NTE2ODMxNzEsImV4cCI6MTY4MzIxOTE3MX0.QQJX5-wGjKoAiCDQlTeE194zu1ey01YdzCnrHHAdQLg`
                    }
                })
                .then(res => res.json())
                .then(ans => {
                    getPosts(ans);
                })
            
        }, []);
        return( <>
            <h1 className="H1">Мои посты</h1>
            <div className="container__posts">   
            {posts.map((post,i) => <div key={i} className="post"><img className="imgpost" src={post.image}/><span className="textpost">{post.title}</span><span className="text__description">{post.text}</span></div>)}
            </div>
        </>
    )
}

export default Home;