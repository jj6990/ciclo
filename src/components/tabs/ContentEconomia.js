import React, { Fragment } from 'react';
import Img1 from '../../images/Economia-Circular/img1.svg';

const ContentEconomia = () => {
  return (
    <Fragment>
      <div className='info-container-inner'>
        <div className='master-line'></div>
        <div className='section-1-ec row1-ec'>
          <div className='title-container'>
            <h1>Economía Circular</h1>
          </div>
          <div className='space'></div>
          <div className='description-container'>
            <p>
              Es la actividad económica que construye y reconstruye la salud
              general del sistema. El concepto reconoce la importancia de la
              economía que necesita trabajar de manera efectiva a todas las
              escalas, para grandes y pequeñas empresas, para organizaciones e
              individuos, global y localmente. La transición a una economía
              circular no solo equivale a ajustes destinados a reducir los
              impactos negativos de la economía lineal. Más bien, representa un
              cambio de sistema que construye resiliencia a largo plazo, genera
              oportunidades comerciales y económicas, y proporciona beneficios
              ambientales y sociales (ellenmacarthurfoundation, 2016).
            </p>
          </div>
          <div className='image-container'>
            <img src={Img1} />
          </div>
        </div>
        <div className='horizontal-line-b-ec1'></div>
        <div className='section-2 row2'>
          <div className='card-1'>
            <h3 className='title'>
              El sistema actual ya no funciona para empresas, personas o el
              medio ambiente.
            </h3>
            <p className='paragraph'>
              Tomamos recursos del suelo para fabricar productos, que usamos, y,
              cuando ya no los queremos, los desechamos. Llamamos a esto una
              economía lineal.
            </p>
          </div>
        </div>
        <div className='horizontal-line-b-ec2'></div>
        <div className='section-2 row3'>
          <div className='card-1--no-shadow-bl'>
            <h3 className='title'>Economía Circular es una nueva forma de:</h3>
            <ul className='list'>
              <li className='item'>Diseñar</li>

              <li className='item'>Hacer</li>

              <li className='item'>Usar</li>
            </ul>
          </div>
        </div>
        <div className='horizontal-line-b-ec3'></div>
        <div className='section-2 row4'>
          <div className='card-1'>
            <h3 className='title'>
              Cambiar el sistema involucra a todos y todo:
            </h3>
            <p className='paragraph'>
              Empresas, gobiernos e individuos; nuestras ciudades, nuestros
              productos y nuestros trabajos. Al diseñar los desechos y la
              contaminación, mantener los productos y materiales en uso y
              regenerar los sistemas naturales, podemos reinventar todo.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentEconomia;
