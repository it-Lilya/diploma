import React from "react";
import './MainBottom.css';
import { MainForm } from "./MainForm/MainForm";

export const MainBottom = () => {
    return (
        <div className="main-bottom">
            <h2 className="bottom-tigline">Вся жизнь - <span className="selection">путешествие!</span></h2>
        <MainForm />
        </div>
    )
}

