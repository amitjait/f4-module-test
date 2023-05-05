import React from "react";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css"


export default function App(){
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}