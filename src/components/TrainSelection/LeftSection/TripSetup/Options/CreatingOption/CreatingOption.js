import React, { useEffect, useState } from 'react';
import './CreatingOption.css';

function movement() {
  const btn = document.querySelectorAll('.option-switch');
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      e.classList.toggle('switch-on');
      e.parentElement.classList.toggle('on-parent');
    });
  });
}

export const CretingOption = () => {
  useEffect(() => movement());
  const [check, setCheck] = useState({
    coupe: false,
    reserved: false,
    seated: false,
    lux: false,
    wifi: false,
    express: false,
  });

  return (
      <div className='options-container'>
        <div className='option-element checkbox-coupe'>
          <span className='option-icon coupe-img'></span>
          <p className='option-title'>Купе</p>
          <div className='checking' onClick={() => { setCheck({ ...check, coupe: !check.coupe }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.coupe}/>
          </div>
        </div>

        <div className='option-element checkbox-seat'>
          <span className='option-icon seat-img'></span>
          <p className='option-title'>Плацкарт</p>
          <div className='checking' onClick={() => { setCheck({ ...check, seat: !check.seat }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.seat}

            onClick={() => setCheck({ ...check, seat: !check.seat })}/>
          </div>
        </div>
        <div className='option-element checkbox-seated'>
          <span className='option-icon seated-img'></span>
          <p className='option-title'>Сидячий</p>
          <div className='checking' onClick={() => { setCheck({ ...check, seated: !check.seated }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.seated}

            onClick={() => setCheck({ ...check, seated: !check.seated })}/>
          </div>
        </div>
        <div className='option-element checkbox-lux'>
          <span className='option-icon lux-img'></span>
          <p className='option-title'>Люкс</p>
          <div className='checking' onClick={() => { setCheck({ ...check, lux: !check.lux }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.lux}

            onClick={() => setCheck({ ...check, lux: !check.lux })}/>
          </div>
        </div>
        <div className='option-element checkbox-wifi'>
          <span className='option-icon wifi-img'></span>
          <p className='option-title'>Wi-Fi</p>
          <div className='checking' onClick={() => { setCheck({ ...check, wifi: !check.wifi }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.wifi}

            onClick={() => setCheck({ ...check, wifi: !check.wifi })}/>
          </div>
        </div>
        <div className='option-element checkbox-express'>
          <span className='option-icon express-img'></span>
          <p className='option-title'>Экспресс</p>
          <div className='checking' onClick={() => { setCheck({ ...check, express: !check.express }); }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.express}

            onClick={() => setCheck({ ...check, express: !check.express })}/>
          </div>
        </div>
      </div>
  );
};
