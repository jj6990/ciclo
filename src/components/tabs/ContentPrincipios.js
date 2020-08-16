import React, { Fragment } from 'react';

const ContentPrincipios = () => {
  return (
    <Fragment>
      <div className='info-container-pr-inner'>
        <div className='master-line-pr'></div>
        <div className='section-1 row1'>
          <div className='number-container'>
            <h1>3</h1>
          </div>
          <div className='title-container'>
            <h1>Principios de Cambio</h1>
          </div>
          <div className='description-container'>
            <p>
              Existen 3 principios básicos de acción dentro de la economía
              circular para empezar a participar dentro de este modelo económico
            </p>
          </div>
        </div>
        <div className='horizontal-line-b1'></div>
        <div className='section-2 row2'>
          <div className='card-1'>
            <h3 className='title'>1. Las 3R</h3>
            <ul className='list'>
              <li className='item'>Selección de materiales</li>
              <li className='item'>Componentes estandarizados</li>
              <li className='item'>Productos diseñados para durar</li>
              <li className='item'>
                Diseño para una fácil clasificación al final de una vida útil
              </li>
              <li className='item'>
                Diseño para posibles aplicaciones útiles de subproductos y
                desechos
              </li>
            </ul>
          </div>
        </div>
        <div className='horizontal-line-b2'></div>
        <div className='section-2 row3'>
          <div className='card-1'>
            <h3 className='title'>2. Se consolida las 3R</h3>
            <p className='paragraph'>
              Se reutilizaron y reciclaron los recursos dentro de parques
              eco-industriales e industrias enlazadas, de tal manera que
              marcharon totalmente en el sistema de producción local.
            </p>
          </div>
        </div>
        <div className='horizontal-line-b3'></div>
        <div className='section-2 row4'>
          <div className='card-1'>
            <h3 className='title'>3. Se constituye el sistema</h3>
            <p className='paragraph'>
              Se constituyeron diferentes sistemas de producción y consumos
              locales, los recursos transitaron entre industrias y los sistemas
              urbanos, este nivel impuso el desarrollo local de sistemas de
              recolección, almacenaje, procesado, y distribución, por producto.
            </p>
          </div>
        </div>
        <div className='horizontal-line-b4'></div>
        <div className='section-2 row5'>
          <div className='card-1--no-shadow'>
            <p className='paragraph'>
              Los 3 niveles producen un incremento en la economía por lo que
              requieren nuevas empresas que se especialicen en procedimientos de
              salvación de recursos, empresas de producción mas limpia y
              facilidades públicas
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentPrincipios;
