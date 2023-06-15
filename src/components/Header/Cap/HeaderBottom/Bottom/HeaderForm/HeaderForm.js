import React from 'react';
import './HeaderForm.css';
import { MyApp } from './Calendar/Calendar';
import { Cities } from './Cities/Cities';

// function savingData(e) {
//   e.preventDefault();
//   e.target.classList.add('body-change');
//   const form = document.getElementById('form-search');
//   const children = form.querySelectorAll('.input');

//   children.forEach(e => {
//     if (e.value === '') {
//       return;
//     }
//     localStorage.setItem(e.name, e.value);
//   })

//   // if (!e.target.classList.contains('train-btn')) {
//   //   window.location.assign('http://localhost:3000/train-selection/');
//   // };

//   fetch('https://netology-trainbooking.netoservices.ru/', {
//     method: 'POST',
//     body: new FormData(form),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   children.forEach((e) => {
//     e.value = '';
//   });
// }
// function searchDirections() {
//   const formData = document.getElementById('form-search');
//   const cityInputs = formData.querySelectorAll('.city-inputs input');
//   if (cityInputs[0].value == '' || cityInputs[1].value === '') {
//     return false;
//   }
// }
export const HeaderForm = () => (
    <div className='bottom-form-container'>
      <form id='form-search' className='bottom-form'>
        <div className='fir'>
          <h4 className='form-direction'>Направление</h4>
        <div className='input-container'>
          <Cities />
        </div>
        </div>
        <div className='sec'>
          <h4 className='form-direction'>Дата</h4>
        <div className='search-data'>
            <MyApp />
        </div>
        </div>
        </form>
        <button id='btn-search' className='search-button' type='button'>Найти билеты</button>
    </div>
);
