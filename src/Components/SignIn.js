import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/action";
import "./signing.css"



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
        <div className="sign">
            {
                console.log("user", user)
            }
            <div className="screen-1">
                <h1>Signin</h1>
                    <input className="email" type="text" name="user-name" placeholder="user name" onChange={(e) => setUserName(e.target.value)}/>
                    <div className="under-line"></div>
                    <input className="password"  type="password" name="password" placeholder="password" onChange={(e) => setPass(e.target.value)}/>  
                    <div className="under-line"></div>  
                    <button className="login" onClick={() => postReuqest()}>Login</button>
            </div>
        </div>
        
    )
}