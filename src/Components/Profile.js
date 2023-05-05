import React, { useEffect } from "react";
import Details from "./Details";
import Bank from "./Bank";
import Bio from "./Bio";
import Company from "./Company";
import Account from "./Account";
import Additonal from "./Additonal";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import NavBar from "./NavBar";

import "./profile.css"


export default function Profile(){

    let user = useSelector((state) => state.user.user);
    let id = useSelector((state) => state.user.id);

    let dispatch = useDispatch();

    useEffect(() =>{
        
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => dispatch(addUser(data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="profile">
            <NavBar/>
            { 
                user.address ? 
                <div className="contain">
                    <Details user ={user} />
                    <div className="merge">
                        <Account user={user} />
                        <Company user={user} />
                    </div>
                    <div className="merge">
                    <Bank user={user}/>
                    <Bio user={user} />
                    </div>
                    <Additonal user={user} />
                </div> 
                :
                <div className="loader">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            }
        </div>
    )
}