import React from "react";

export default function Account({user}){
    return (
        <>
        {
            <div className="detail">
                <h1>Account Details</h1>
                <div className="inner-detail">
                    <h3>User name : {user.userName}</h3>
                    <h3>Email ID : {user.email}</h3>
                    <h3>Passowrd : {user.password}</h3>
                </div>
            </div>
        }
        </>
    )
}