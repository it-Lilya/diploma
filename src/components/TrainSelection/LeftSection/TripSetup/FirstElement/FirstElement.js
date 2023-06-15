import React from 'react';
import './FirstElement.css';
import Calendar from 'react-calendar';
import format from 'date-fns/format';

function openCalendar(e) {
  const calendar = e.target.nextSibling;
  calendar.classList.toggle('open-calendar');
}

function onChange(e) {
  const input = document.querySelector('.open-calendar').parentElement.querySelector('input');
  input.value = format(e, 'dd.MM.yyyy');
  document.querySelector('.open-calendar').classList.remove('open-calendar');
  if (input.classList.contains('travel-date-first')) {
    localStorage.setItem('date-first', input.value);
  }
  if (input.classList.contains('travel-date-second')) {
    localStorage.setItem('date-second', input.value);
  }
}

export const FirstElement = () => {
  return (
    <div className='first-element-container'>
      <div className='date-container-first'>
        <div className='date-travel'>
          <h4 className='travel-title'>Дата поездки</h4>
          <input className='travel-date travel-date-first'
            type='text'
            name='date-first'
            placeholder='ДД/ММ/ГГ'
            required></input>
          <i className='travel-vector' onClick={openCalendar}></i>
          <Calendar className='hidden-data' onChange={onChange} />
        </div>
        <div className='date-travel'>
          <h4 className='travel-title'>Дата возвращения</h4>
            <input className='travel-date travel-date-second'
              type='text'
              name='date-first'
              placeholder='ДД/ММ/ГГ'
              required></input>
            <i className='travel-vector' onClick={openCalendar}></i>
            <Calendar className='hidden-data' onChange={onChange}/>
        </div>
      </div>
   </div>
  );
};
