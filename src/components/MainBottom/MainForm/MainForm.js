import React from "react";
import { Link } from "react-router-dom";
import './MainForm.css';
import { MyApp } from "./Calendar/Calendar";

export const MainForm = () => {
    return (
        <div className="bottom-form-container">
            <form id="form-search" className="bottom-form">
                <h4 className="form-direction">Направление</h4>
                <div className="input-container">
                    <div className="city-inputs">
                        <input className="form-input" type="text" placeholder="Откуда" name="city" required></input>
                        <i className="vector-city" aria-hidden="true"></i>
                    </div>
                    <Link className="icon-form"></Link>
                    <div className="city-inputs">
                        <input className="form-input" type="text" placeholder="Куда" name="city" required></input>
                        <i className="vector-city"></i>
                    </div>
                </div>
                <div className="search-data">
                <MyApp />
                <div className="search-blocks">
                    <div className="date-inputs">
                        <input className="form-input-date" type="date" name="date" required></input>
                        <i className="vector-date"></i>
                    </div>
                    <button id="btn-search" className="search-button">Найти билеты</button>
                </div>
                </div>
            </form>
        </div>
    )
}


