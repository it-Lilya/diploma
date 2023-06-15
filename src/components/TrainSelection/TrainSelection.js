import React, { useEffect } from 'react';
import './TrainSelection.css';
import { HeaderMenu } from '../Header/Cap/HeaderMenu/HeaderMenu';
import { HeaderForm } from '../Header/Cap/HeaderBottom/Bottom/HeaderForm/HeaderForm';
import { ProgressOrder } from './ProgressOrder/ProgressOrder';
import { LeftSection } from './LeftSection/LeftSection';
import { Footer } from '../Footer/Footer';

function workWithForm() {
  const trainFormContainer = document.querySelector('.bottom-form-container');
  trainFormContainer.classList.add('train-form-container');

  const trainForm = trainFormContainer.firstChild;
  trainForm.classList.add('train-form');

  const trainBlocks = trainForm.childNodes;

  trainBlocks.forEach((e) => {
    e.classList.add('blocks-train');
  });

  // const btn = trainForm.lastChild;
  // btn.classList.remove('blocks-train');
  // btn.classList.add('train-btn');

  // const cityInput = document
  //   .querySelector('.fir')
  //   .querySelectorAll('.form-input');
  // cityInput.forEach((e) => {
  //   e.classList.add('date-inputs-train');
  // });

  // const dateInput = document
  //   .querySelector('.search-data')
  //   .querySelectorAll('.form-input-date');

  // cityInput[0].value = localStorage.getItem('city-first');
  // cityInput[1].value = localStorage.getItem('city-second');
  // dateInput[0].value = localStorage.getItem('date-first');
  // dateInput[1].value = localStorage.getItem('date-second');
}

export const TrainSelection = () => {
  useEffect(() => {
    workWithForm();
  });

  return (
    <>
      <header className='train-header'>
        <div className='train-image'>
          <div className='main-container'>
            <div className='main-logo'>Лого</div>
          </div>
          <HeaderMenu />
          <HeaderForm />
          <ProgressOrder />
        </div>
      </header>
      <main className='main-contain'>
        <LeftSection />
      </main>
      <Footer />
    </>
  );
};
