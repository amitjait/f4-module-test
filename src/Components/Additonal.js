import React from "react";

export default function Additonal({user}){

    return (
        <>
        {
            <div className="card p-2 m-2">
                <h1>Additonal Details</h1>
                <div className="card p-2">
                    <h3>EIN : {user.domain}</h3>
                    <h3>Domain : {user.domain}</h3>
                    <h3>IP : {user.ip}</h3>
                    <h3>MAC Address : {user.macAddress}</h3>
                    <h3>SSN : {user.ssn}</h3>
                    <h3>User Agent : {user.userAgent}</h3>
                </div>
            </div>
        }
        </>
    )
}