import React from 'react';
import Img1 from '../../images/Economia-Circular/img1.svg';

const ContentEconomia = () => {
  return (
    <div className='info-container-inner'>
      <div className='grid-section-economia'>
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
              ambientales y sociales (ellenmacarthurfoundation, 2016).
            </p>
          </div>
          <div className='image-container'>
            <div className='image-container-inner'>
              <img src={Img1} className='image-container-inner-img' />
            </div>
          </div>
        </div>
        <div className='h-line-1'>
          <div className='h-line-1-inner green'></div>
        </div>
        <div className='box-container'>
          <div className='box-container-inner'>
            <div className='box-title-container'>
              <div className='box-title-container-inner'>
                <h3 className='box-title-container-inner-text'>
                  El sistema actual ya no funciona para empresas, personas o el
                  medio ambiente.
                </h3>
              </div>
            </div>
            <div className='box-paragraph-container'>
              <div className='box-paragraph-container-inner'>
                <p className='box-paragraph-container-inner-text'>
                  Tomamos recursos del suelo para fabricar productos, que
                  usamos, y, cuando ya no los queremos, los desechamos. Llamamos
                  a esto una economía lineal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='last-container'>
          <div className='last-container-inner'>
            <div className='last-container-inner-title'>
              <div className='last-container-inner-title-inner'>
                <h1 className='last-container-inner-title-inner-text'>
                  Economía Circular es una nueva forma de:
                </h1>
              </div>
            </div>
            <div className='lines-container'>
              <div className='line-1-v'></div>
              <div className='horizontal-line-container1'>
                <div className='line-2-h'></div>
                <h4 className='line-title'>Diseñar</h4>
              </div>

              <div className='line-3-v'></div>
              <div className='horizontal-line-container2'>
                <div className='line-4-h'></div>
                <h4 className='line-title'>Hacer</h4>
              </div>

              <div className='line-5-v'></div>
              <div className='horizontal-line-container3'>
                <div className='line-6-h'></div>
                <h4 className='line-title'>Usar</h4>
              </div>
            </div>
            <div className='box-container'>
              <div className='box-container-inner'>
                <div className='box-title-container'>
                  <div className='box-title-container-inner'>
                    <h3 className='box-title-container-inner-text'>
                      Cambiar el sistema involucra a todos y todo:
                    </h3>
                  </div>
                </div>
                <div className='box-paragraph-container'>
                  <div className='box-paragraph-container-inner'>
                    <p className='box-paragraph-container-inner-text'>
                      empresas, gobiernos e individuos; nuestras ciudades,
                      nuestros productos y nuestros trabajos. Al diseñar los
                      desechos y la contaminación, mantener los productos y
                      materiales en uso y regenerar los sistemas naturales,
                      podemos reinventar todo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEconomia;
