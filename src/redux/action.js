import {  ADD_USER } from "./actionType";


export const addUser = (user) => {
    return {
        type : ADD_USER,
        payload : user,
    }
}