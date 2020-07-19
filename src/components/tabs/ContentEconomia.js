import React from 'react';

import Img1 from '../../images/Economia-Circular/img1.svg';

const ContentEconomia = () => {
  return (
    <div className='info-container-inner'>
      <div className='grid-section'>
        <div className='line'>
          <div className='line-inner green'></div>
        </div>
        <div className='title-container'>
          <div className='title-container-inner'>
            <h1 className='title-container-inner-text'>Economía Circular</h1>
          </div>
        </div>
        <div className='paragraph-container'>
          <div className='paragraph-container-inner'>
            <p className='paragraph-container-inner-text'>
              Es la actividad económica que construye y reconstruye la salud
              general del sistema. El concepto reconoce la importancia de la
              economía que necesita trabajar de manera efectiva a todas las
              escalas, para grandes y pequeñas empresas, para organizaciones e
              individuos, global y localmente. La transición a una economía
              circular no solo equivale a ajustes destinados a reducir los
              impactos negativos de la economía lineal. Más bien, representa un
              cambio de sistema que construye resiliencia a largo plazo, genera
              oportunidades comerciales y económicas, y proporciona beneficios
              ambientales y sociales (ellenmacarthurfoundation, 2016)
            </p>
          </div>
        </div>
        <div className='image-container'>
          <div className='image-container-inner'>
            <img src={Img1} className='image-container-inner-img' />
          </div>
        </div>
        <div className='h-line-1'>
          <div className='h-line-1-inner green'></div>
        </div>
      </div>
    </div>
  );
};

export default ContentEconomia;
