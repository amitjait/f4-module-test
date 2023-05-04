import React from "react";

export default function Bank({user}){
    return (
        <>
        {
        <div className="card p-2">
            <h1>Bank Details</h1>
            <div className="card p-2">
                <h3>Card Number : {user.bank.cardNumber}</h3>
                <h3>Card Expires : {user.bank.cardExpire}</h3>
                <h3>Card Type : {user.bank.cardType}</h3>
                <h3>Currency : {user.bank.currency}</h3>
                <h3>IBAN : {user.bank.iban}</h3>
            </div>
        </div>
        }
        </>
    )
}