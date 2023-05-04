import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./redux/action";


let error = false;
let obj = {};

export default function SignIn(){

    let [userName, setUserName] = useState('');
    let [pass, setPass] = useState('');

    let user  = useSelector((state) => state.user.user)

    let dispatch = useDispatch();

    let navigate = useNavigate();

    async function postReuqest(){

        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username:`${userName}`,
        password:`${pass}`,
        })
        })
        .then(res => {
            if(res.status === 200){
                error = false
            }else{
               error = true;
            } 
            return res.json();
        })
        .then(data => obj=data)
        .then(() =>{
            if(error === false){
                dispatch(addUser(obj))
                // console.log(obj)
                navigate("/profile")
            }else{
                console.log(obj.message);
                obj.message ? alert(obj.message) : alert("please enter you details!")
            }
        })
        .catch((e) =>{
            console.log(e, "error");
        }); 

    }


    return (
        <div className="main">
            {
                console.log("user", user)
            }
            <div className="card w-50 d-flex p-2">
                <h1>Signin</h1>
                    <input className="input-group mt-2 mb-2 p-2" type="text" name="user-name" placeholder="user name" onChange={(e) => setUserName(e.target.value)}/>
                    <div className="under-line"></div>
                    <input className="input-group mt-2 mb-3 p-2"  type="password" name="password" placeholder="password" onChange={(e) => setPass(e.target.value)}/>  
                    <div className="under-line"></div>  
                    <button className="btn rounded w-50 border bg-primary mt-2" onClick={() => postReuqest()}>Login</button>
            </div>
        </div>
        
    )
}