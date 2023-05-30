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

setTimeout(() => {
    let submit = document.querySelector('.search-button');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.querySelector('.bottom-form');
        const formData = new FormData(form);
        
        fetch('https://netology-trainbooking.netoservices.ru/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    })
}, 2)
