import React, { useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { SectionReviews } from './SectionReviews/SectionReviews';
import { Footer } from './Footer/Footer';
import { TrainSelection } from './TrainSelection/TrainSelection';

// function f() {
//   fetch('https://netology-trainbooking.netoservices.ru/routes/last')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
// f();

// function savingData(e) {
//   e.preventDefault();
//   e.target.classList.add('body-change');
//   const form = document.getElementById('form-search');
//   const children = form.querySelectorAll('.input');

//   children.forEach((ev) => {
//     if (ev.value === '') {
//       return false;
//     }
//     return localStorage.setItem(ev.name, ev.value);
//   });
// }
export const General = () => {
  // const [appState, setAppState] = useState();
  const optionFirst = 
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <SectionReviews />
      <Footer />
    </>;
  const optionSecond = <>
    <TrainSelection/>
  </>;
  const [body, setBody] = useState(optionFirst);
  useEffect(() => {
    const btn = document.getElementById('btn-search');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const formData = document.getElementById('form-search');
      const cityInputs = formData.querySelectorAll('.city-inputs input');
      if (cityInputs[0].value !== '' || cityInputs[1].value !== '') {
        console.log(cityInputs[0].id);
        fetch(`https://netology-trainbooking.netoservices.ru/routes?from_city_id=${cityInputs[0].id}&to_city_id=${cityInputs[1].id}`)
          .then((response) => response.json()
            .then((data) => localStorage.setItem('routes', data)));
      }
      // savingData(e);
      setBody(optionSecond);
    });
  });
  return (
    <>
      {body}
    </>
  );
};
