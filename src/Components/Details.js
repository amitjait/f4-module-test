import React from "react";

export default function Details({user}){
    return (
        <>
        {
            <div className="card d-flex flex-row p-2 align-items-center">
            
                <div className="image me-2">
                    
                    <img src={user.image} alt="user details" />
                </div>
                <div className="card p-2">
                    <h1>Details</h1>
                    <div className="card p-2 ">
                        
                        <h4>ID : {user.id}</h4>
                        <h3>Name : {user.firstName} {user.maidenName} {user.lastName}</h3>
                        <h3>Age : {user.age}</h3>
                        <h3>Email : {user.email}</h3>
                        <h3>Phone : {user.phone}</h3>
                        <h3>University : {user.university}</h3>
                        
                        <h3>Address : {user.address.address}, 
                                    {user.address.city}, 
                                    {user.address.coordinates.lat} {user.address.coordinates.lng},  
                                    {user.address.postalCode}, 
                                    {user.address.state}
                        </h3>                
                    </div>
                </div>
               
            </div>
        }
        </>
    )
}