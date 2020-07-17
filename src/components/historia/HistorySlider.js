import React, { useRef, createRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TimelineMax, Power4, Linear } from 'gsap/all';

import titleRaices from '../../images/History/introHistory/title-raices.svg';
import img1 from '../../images/History/img-1.svg';
import img2 from '../../images/History/img-2.svg';
import img3 from '../../images/History/img-3.svg';
import img4 from '../../images/History/img-4.svg';
import img5 from '../../images/History/img-5.svg';
import img6 from '../../images/History/img-6.svg';
import img7 from '../../images/History/img-7.svg';

gsap.registerPlugin(TimelineMax, Power4, Linear);

const slidesInfo = [
  {
    title: titleRaices,
    image: img1,
    text:
      'En un lejano poblado a las afueras de la ciudad, vivía Juan un joven que recién había cumplido la mayoría de edad y toda su vida vivió inmerso en el campo, rodeado de naturaleza, de amor y sobre todo de libertad. De esa libertad de vivir, de respirar aire puro, esa libertad de la que ahora estamos tan limitados.',
  },
  {
    title: titleRaices,
    image: img2,
    text:
      'Pero tan pronto como se pone el sol, todo puede cambiar en un instante y todo aquello que era deslumbrante a los ojos solo causa miedo e inseguridad. Ya nada es como lo conocía Juan, quien a sus 30 años sentía que lo estaba perdiendo todo, en un abrir y cerrar de ojos todo se había transformado, inclusive el aroma tan cambiante le hacía pensar que algo andaba mal. A lo lejos cerca del paisaje soñado se podía divisar el humo de fábricas, de dinero y poder.',
  },
  {
    title: titleRaices,
    image: img3,
    text:
      'Era lógico que lo único que quería Juan era buscar la forma de erradicar este problema, algo tenia que hacer para que todo regresara a la normalidad, a los días cotidianos, a la vida que conocía desde pequeño. De pronto se detiene y piensa: ¿Y toda esta gente que ha conseguido beneficiarse del desastre? Y ahí es cuando el cerebro entra en confusión. ¿Qué hacer y qué no? Juan sabe que toda esa gente ahí dentro de las fábricas es vulnerable y necesitan el empleo. Y es ahí entonces cuando regresa la remota e irrevocable idea de que debe actuar.',
  },
  {
    title: titleRaices,
    image: img4,
    text:
      'A medida que el tiempo paso se le dijo adiós al agua cristalina del rio, al aire fresco, al paisaje puro, a la flora y también a la fauna. Todo cambio de tono, ya no había vida en nada, que egoísta es el humano pensaba Juan, con la cabeza revuelta solo meditaba acerca del poder que tiene el dinero y como todo lo cambia en segundos. Y si es verdad, en ocasiones el humano se ciega ante el dominio, nos volvemos plagas que vamos acabando con todo a nuestro paso teniéndolo todo al precio que sea, no somos conscientes de las consecuencias que marcamos.',
  },
  {
    title: titleRaices,
    image: img5,
    text:
      'Juan se ha sentado a pensar, y sabiendo lo difícil que es hacer cambiar el pensamiento de los demás se ha propuesto a ser una fuente de cambio. A buscar por el mismo un camino viable que no solo genere empleo sino también sea amigable con el medio ambiente. Por medio de innovación ha encontrado vías sustentables en las que el pueda minorizar impactos ambientales y crear fuentes de empleo para concientizar a la gente que pueden generar negocios sin dañar a la naturaleza. Y sobre todo a aprovechar los recursos que se tiene de manera sensata.',
  },
  {
    title: titleRaices,
    image: img6,
    text:
      'Y así fue después de unos años muy duros Juan no solo logro estar inmerso dentro de la economía circular, sino que a través de esta logro hacer crecer los negocios por medio de innovaciones que reciclen el plástico, dando oportunidad a la gente de creer económicamente reduciendo el impacto ambiental que tanto había caotizado su hogar.',
  },
  {
    title: titleRaices,
    image: img7,
    text:
      'De a poco todo volvió a la calma, era como una infección a la que de tanto limpiar al final se curaba. Todo lo que un día se había perdido se estaba recuperando, gracias a Juan y a todas las personas que creyeron en el y el proceso por el que había pasado, dedico gran parte de su tiempo y su vida a investigar maneras sustentables de generar estabilidad económica, reusando, reciclando y trabajando conjuntamente con gente que compartía los mismo ideales. Y al final el resultado fue solamente eso, volver a vivir.',
  },
];

function HistorySlider() {
  const dot1Tl = new TimelineMax();
  const dot2Tl = new TimelineMax();
  const dot3Tl = new TimelineMax();
  const dot4Tl = new TimelineMax();
  const dot5Tl = new TimelineMax();
  const dot6Tl = new TimelineMax();
  const dot7Tl = new TimelineMax();

  const wtl = new TimelineMax();

  const slides = useRef(slidesInfo.map(() => createRef()));
  const textSlides = useRef(slidesInfo.map(() => createRef()));
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  const dot4 = useRef();
  const dot5 = useRef();
  const dot6 = useRef();
  const dot7 = useRef();
  let container = useRef();
  let dots = useRef();
  let turbulence2 = useRef();
  let disMap2 = useRef();

  useEffect(() => {
    wtl
      .to(
        turbulence2.current,
        1,
        { attr: { baseFrequency: '0 0', ease: Power4.easeOut } },
        0.6
      )
      .to(
        disMap2.current,
        1,
        { attr: { scale: '0', ease: Power4.easeOut } },
        0.6
      );

    dot1Tl.to(textSlides.current[0].current, 1, {
      opacity: 1,
      className: '+=text-container',
      duration: 2,
      ease: Linear.easeOut,
    });
  });

  const dotOne = (e) => {
    let size = slides.current[0].current.clientWidth;

    if (dots && size) {
      dot1Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot1.current, 0, {
          className: '+=active-dot',
        });
    }

    if (slides && e && textSlides) {
      dot1Tl.to(container.current, 1, {
        x: 0,
        duration: 1,
        ease: Power4.easeOut,
      });

      dot1Tl.to(slides.current[0].current, 0.5, {
        className: '+=active',
        opacity: 1,
        duration: 0.5,
        ease: Power4.easeOut,
      });

      dot1Tl.to(textSlides.current[0].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotTwo = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot2Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot2.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot2Tl.to(container.current, 1, {
        x: -size * 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot2Tl.to(slides.current[1].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot2Tl.to(textSlides.current[1].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotThree = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot3Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot3.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot3Tl.to(container.current, 1, {
        x: -size * 2,
        duration: 1,
        ease: Power4.easeOut,
      });

      dot3Tl.to(slides.current[2].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });

      dot3Tl.to(textSlides.current[2].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotFour = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot4Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot4.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot4Tl.to(container.current, 1, {
        x: -size * 3,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot4Tl.to(slides.current[3].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot4Tl.to(textSlides.current[3].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotFive = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot5Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot5.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot5Tl.to(container.current, 1, {
        x: -size * 4,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot5Tl.to(slides.current[4].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot5Tl.to(textSlides.current[4].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotSix = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot6Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot6.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot6Tl.to(container.current, 1, {
        x: -size * 5,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot6Tl.to(slides.current[5].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot6Tl.to(textSlides.current[5].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };
  const dotSeven = (e) => {
    let size = slides.current[0].current.clientWidth;
    if (dots && size) {
      dot7Tl
        .to(dots.current.childNodes, 0, {
          className: '+=dot',
        })
        .to(dot7.current, 0, {
          className: '+=active-dot',
        });
    }
    if (slides && e) {
      dot7Tl.to(container.current, 1, {
        x: -size * 6,
        duration: 1,
        opacity: 1,
        ease: Power4.easeOut,
      });
      dot7Tl.to(slides.current[6].current, 1, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeOut,
      });
      dot7Tl.to(textSlides.current[6].current, 0.5, {
        opacity: 1,
        className: '+=text-container',
        duration: 0.5,
        ease: Linear.easeOut,
      });
    }
  };

  return (
    <div className='main-container'>
      <div className='main-container-inner'>
        <svg>
          <filter id='noise2' x='0%' y='0%'>
            <feTurbulence
              baseFrequency='.07 .03'
              result='NOISE2'
              numOctaves='1'
              id='turbulence2'
              ref={turbulence2}
            />
            <feDisplacementMap
              in='SourceGraphic'
              in2='NOISE2'
              scale='30'
              width='100%'
              ref={disMap2}
            ></feDisplacementMap>
          </filter>
        </svg>
        <div className='slider-controls'>
          <div className='dots' ref={dots}>
            <div className='dot active-dot' onClick={dotOne} ref={dot1}></div>
            <div className='dot' onClick={dotTwo} ref={dot2}></div>
            <div className='dot' onClick={dotThree} ref={dot3}></div>
            <div className='dot' onClick={dotFour} ref={dot4}></div>
            <div className='dot' onClick={dotFive} ref={dot5}></div>
            <div className='dot' onClick={dotSix} ref={dot6}></div>
            <div className='dot' onClick={dotSeven} ref={dot7}></div>
          </div>
        </div>
        <div className='slider-container' ref={container}>
          {slidesInfo.map((info, i) => (
            <section
              key={i}
              className='slider-container-section'
              ref={slides.current[i]}
            >
              <div className='slider-container-section-inner'>
                <div className='img-container'>
                  <img className='img-container-inner' src={info.image} />
                </div>
                <div className='text-container' ref={textSlides.current[i]}>
                  <div className='text-container-inner'>
                    <div className='text-container-inner-line'></div>
                    <div className='text-container-inner-title'>
                      <img src={info.title} alt='chapter title' />
                    </div>
                    <div className='text-container-inner-text'>
                      <p className='text'>{info.text}</p>
                    </div>
                    <div className='text-container-inner-line'></div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className='down-line'>
          <div className='down-line-inner'></div>
        </div>
      </div>
    </div>
  );
}

export default HistorySlider;
