import React from "react";
import './MainMenu.css';
import { NavLink, Routes, Route } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-container">
                <NavLink className="menu-item"> 
                <h5>О нас</h5>
            </NavLink>
            <NavLink className="menu-item"> 
                <h5>Как это работает</h5>
            </NavLink>
            <NavLink className="menu-item"> 
                <h5>Отзывы</h5>
            </NavLink>
            <NavLink className="menu-item"> 
                <h5>Контакты</h5>
            </NavLink>
            </div>
            
        </div>
    )
}
// ДОРАБОТКА!!!!
export const MainMenu = () => {
    return (
        <>
        < Menu />
        <Routes>
            <Route path='/sdfs'></Route> 
        </Routes>
        </>
    )
}