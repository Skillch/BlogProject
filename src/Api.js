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

}

const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4Y2ZkOTcyNTA2OTFhZGU1OGQiLCJpYXQiOjE2NTE2ODMxNzEsImV4cCI6MTY4MzIxOTE3MX0.QQJX5-wGjKoAiCDQlTeE194zu1ey01YdzCnrHHAdQLg"
}

const api = new Api(config);

export default api;