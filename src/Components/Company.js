import React from "react";


export default function Company({user}){
    return (
        <>
        {
            <div className="detail">
                <h1>Company details</h1>
                <div className="inner-detail">
                    <h3>Name : {user.company.name}</h3>
                    <h3>Title : {user.company.title}</h3>
                    <h3>Department : {user.company.department}</h3>
                    <h3>Address : {user.company.address.address}, {user.company.address.city}, {user.company.address.postalCode}, {user.company.address.state}</h3>
                </div>
            </div>
        }
        
        </>
    )
}