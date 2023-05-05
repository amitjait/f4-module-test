import React from "react";

export default function Bio({user}){

    return(
        <>
            {
            <div className="detail">
                    <h1>Bio</h1>
                    <div className="inner-detail">
                        <h3>DOB : {user.birthDate}</h3>
                        <h3>Gender : {user.gender}</h3>
                        <h3>Blood Group : {user.bloodGroup}</h3>
                        <h3>Height : {user.height} cm</h3>
                        <h3>Weight : {user.weight} kg</h3>
                        <h3>Eye Color : {user.eyeColor}</h3>
                        <h3>Hair Color : {user.hair.color}</h3>
                        <h3>Hair type : {user.hair.type}</h3>
                    </div>
            </div>
            }
        </>
    )
}