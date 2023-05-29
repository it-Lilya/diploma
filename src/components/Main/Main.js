import React from "react";
import './Main.css';
import { MainMenu } from "../MainMenu/MainMenu";
import { MainBottom } from "../MainBottom/MainBottom";

export const Main = () => {
    return (
        <header className="header">
            <div className="main-image">
                <div className="main-container">
                    <div className="main-logo">Лого</div>             
                </div>
                <MainMenu />
                <MainBottom />
            </div>
        </header>
    )
}
