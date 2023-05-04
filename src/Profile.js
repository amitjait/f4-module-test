import React, { useEffect } from "react";
import Details from "./Components/Details";
import Bank from "./Components/Bank";
import Bio from "./Components/Bio";
import Company from "./Components/Company";
import Account from "./Components/Account";
import Additonal from "./Components/Additonal";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/action";


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
        <div className="container-fluid">
            { 
                user.address ? 
                <div className="container ">
                    <Details user ={user} />
                    <Account user={user} />
                    <Company user={user} />
                    <Bank user={user}/>
                    <Bio user={user} />
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