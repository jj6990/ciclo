import React from 'react';
import { gsap } from 'gsap';
import { TimelineMax, Power4, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(TimelineMax, Power4, ScrollTrigger);

const ContentBloques = () => {
  return (
    <div className='info-container-inner'>
      <div className='grid-section-bloques'>
        <div className='line'>
          <div className='line-inner blue'></div>
        </div>
        <div className='title-container'>
          <div className='title-container-inner'>
            <h1 className='title-container-inner-text'>4 Bloques de Cambio</h1>
          </div>
          <div className='paragraph-container'>
            <div className='paragraph-container-inner'>
              <p className='paragraph-container-inner-text'>
                Hay 4 bloques del sistema de la economía circular:
              </p>
            </div>
          </div>
        </div>
        <div className='h-line-1'>
          <div className='h-line-1-inner'></div>
        </div>
        <div className='box-container'>
          <div className='box-container-inner'>
            <div className='box-title-container'>
              <div className='box-title-container-inner'>
                <h3 className='box-title-container-inner-text red'>
                  1. Diseño economía circular
                </h3>
              </div>
            </div>
            <div className='box-paragraph-container'>
              <div className='box-paragraph-container-inner'>
                <p className='box-paragraph-container-inner-text'>
                  Las empresas necesitan desarrollar competencias básicas en
                  diseño circular para facilitar la reutilización, el reciclaje
                  y la conexión en cascada de productos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lines-container-1'>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>Selección de materiales</h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>Componentes estandarizados</h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>Productos diseñados para durar</h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>
              Diseño para una fácil clasificación al final de una vida útil
            </h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>
              Diseño para posibles aplicaciones útiles de subproductos y
              desechos
            </h4>
          </div>
        </div>
        <div className='h-line-2'>
          <div className='h-line-2-inner'></div>
        </div>
        <div className='box-container2'>
          <div className='box-container-inner'>
            <div className='box-title-container'>
              <div className='box-title-container-inner'>
                <h3 className='box-title-container-inner-text'>
                  2. Nuevos modelos de negocio
                </h3>
              </div>
            </div>
            <div className='box-paragraph-container'>
              <div className='box-paragraph-container-inner'>
                <p className='box-paragraph-container-inner-text'>
                  El cambio a una economía circular requiere modelos comerciales
                  innovadores que reemplacen a los existentes o aprovechen
                  nuevas oportunidades. Las empresas con una importante cuota de
                  mercado y capacidades a lo largo de varios pasos verticales de
                  la cadena de valor lineal podrían desempeñar un papel
                  importante en la innovación de la economía circular e impulsar
                  la circularidad en la corriente principal al aprovechar su
                  escala e integración vertical.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-line-3'>
          <div className='h-line-3-inner'></div>
        </div>
        <div className='box-container3'>
          <div className='box-container-inner'>
            <div className='box-title-container'>
              <div className='box-title-container-inner'>
                <h3 className='box-title-container-inner-text red'>
                  3. Ciclos inversos
                </h3>
              </div>
            </div>
            <div className='box-paragraph-container'>
              <div className='box-paragraph-container-inner'>
                <p className='box-paragraph-container-inner-text'>
                  Se necesitan habilidades nuevas y adicionales para las
                  cascadas y el retorno final de los materiales al suelo o de
                  regreso al sistema de producción industrial. Esto incluye
                  logística de la cadena de entrega, clasificación,
                  almacenamiento, gestión de riesgos, generación de energía e
                  incluso biología molecular y química de polímeros. Con
                  sistemas de recolección y tratamiento rentables y de mejor
                  calidad, y una segmentación efectiva de los productos al final
                  de su vida útil, la fuga de materiales fuera del sistema
                  disminuirá, lo que respaldará la economía del diseño circular
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-line-4'>
          <div className='h-line-4-inner'></div>
        </div>
        <div className='box-container4'>
          <div className='box-container-inner'>
            <div className='box-title-container'>
              <div className='box-title-container-inner'>
                <h3 className='box-title-container-inner-text red'>
                  4. Habilitadores y condiciones
                </h3>
              </div>
            </div>
            <div className='box-paragraph-container'>
              <div className='box-paragraph-container-inner'>
                <p className='box-paragraph-container-inner-text'>
                  Para que la reutilización generalizada de materiales y una
                  mayor productividad de los recursos se convierta en algo
                  común, los mecanismos de mercado deberán desempeñar un papel
                  dominante, apoyados por los responsables políticos, las
                  instituciones educativas y los líderes de opinión populares.
                  Estos habilitadores incluyen:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lines-container-2'>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>
              Colaboración de la población en general
            </h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>Repensar incentivos</h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>
              Proporcionar un conjunto adecuado de normas ambientales
              internacionales
            </h4>
          </div>
          <div className='line-1-v'></div>
          <div className='horizontal-line-container'>
            <div className='line-2-h'></div>
            <h4 className='line-title'>
              Acceso a financiamiento por para de gobierno u organizaciones
              internacionales
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBloques;
