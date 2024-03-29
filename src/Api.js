const responseHandler = res => {
    return res.ok ? res.json() : res.statusText;
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getPostList() {
        return fetch(`${this.path}/posts`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    setPostLike(id, isLike) {
        return fetch(`${this.path}/posts/likes/${id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4YWZkOTcyNTA2OTFhZGU1OGMiLCJpYXQiOjE2NTI0NTc4MjYsImV4cCI6MTY4Mzk5MzgyNn0.btMVIi3oZyae6hsWUMTUdoHDiF7aYayOvDtmKypA0QU"
}

const api = new Api(config);

export default api;