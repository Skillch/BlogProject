import { createContext } from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {}
});

export const UserValue = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjcyYWM4Y2ZkOTcyNTA2OTFhZGU1OGQiLCJpYXQiOjE2NTE2ODMxNzEsImV4cCI6MTY4MzIxOTE3MX0.QQJX5-wGjKoAiCDQlTeE194zu1ey01YdzCnrHHAdQLg",
    user: localStorage.getItem("user") || "",
    setUser: (id) => {
        console.log(this.user);
        localStorage.setItem("user", id);
    }
}