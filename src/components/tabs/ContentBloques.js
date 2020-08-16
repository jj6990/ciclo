import React, { Fragment } from 'react';
import { gsap } from 'gsap';
import { TimelineMax, Power4, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(TimelineMax, Power4, ScrollTrigger);

const ContentBloques = () => {
  return (
    <Fragment>
      <div className='info-container-bl-inner'>
        <div className='master-line'></div>
        <div className='section-1 row1'>
          <div className='number-container'>
            <h1>4</h1>
          </div>
          <div className='title-container'>
            <h1>Bloques de Cambio</h1>
          </div>
          <div className='description-container'>
            <p>Existen 4 bloques del sistema de la economía circular:</p>
          </div>
        </div>
        <div className='horizontal-line-bl1'></div>
        <div className='section-2 row2'>
          <div className='card-1'>
            <h3 className='title'>1. Diseño economía circular</h3>
            <p className='paragraph'>
              Las empresas necesitan desarrollar competencias básicas en diseño
              circular para facilitar la reutilización, el reciclaje y la
              conexión en cascada de productos.
            </p>
          </div>
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
        <div className='horizontal-line-bl2'></div>
        <div className='section-2 row3'>
          <div className='card-1'>
            <h3 className='title'>2. Nuevos modelos de negocio</h3>
            <p className='paragraph'>
              El cambio a una economía circular requiere modelos comerciales
              innovadores que reemplacen a los existentes o aprovechen nuevas
              oportunidades. Las empresas con una importante cuota de mercado y
              capacidades a lo largo de varios pasos verticales de la cadena de
              valor lineal podrían desempeñar un papel importante en la
              innovación de la economía circular e impulsar la circularidad en
              la corriente principal al aprovechar su escala e integración
              vertical.
            </p>
          </div>
        </div>
        <div className='horizontal-line-bl3'></div>
        <div className='section-2 row4'>
          <div className='card-1'>
            <h3 className='title'>3. Ciclos inversos</h3>
            <p className='paragraph'>
              Se necesitan habilidades nuevas y adicionales para las cascadas y
              el retorno final de los materiales al suelo o de regreso al
              sistema de producción industrial. Esto incluye logística de la
              cadena de entrega, clasificación, almacenamiento, gestión de
              riesgos, generación de energía e incluso biología molecular y
              química de polímeros. Con sistemas de recolección y tratamiento
              rentables y de mejor calidad, y una segmentación efectiva de los
              productos al final de su vida útil, la fuga de materiales fuera
              del sistema disminuirá, lo que respaldará la economía del diseño
              circular
            </p>
          </div>
        </div>
        <div className='horizontal-line-bl4'></div>
        <div className='section-2 row5'>
          <div className='card-1'>
            <h3 className='title'>4. Habilitadores y condiciones</h3>
            <p className='paragraph'>
              Para que la reutilización generalizada de materiales y una mayor
              productividad de los recursos se convierta en algo común, los
              mecanismos de mercado deberán desempeñar un papel dominante,
              apoyados por los responsables políticos, las instituciones
              educativas y los líderes de opinión populares. Estos habilitadores
              incluyen:
            </p>
          </div>
          <ul className='list'>
            <li className='item'>Colaboración de la población en general</li>

            <li className='item'>Repensar incentivos</li>

            <li className='item'>
              Proporcionar un conjunto adecuado de normas ambientales
              internacionales
            </li>

            <li className='item'>
              Acceso a financiamiento por para de gobierno u organizaciones
              internacionales
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentBloques;
