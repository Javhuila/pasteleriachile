import React, { Fragment, useState } from 'react';
import NabvarPal from '../Navbar/NabvarPal';
// import $ from 'jquery';
import PastelImg004 from '../../../PastelImg/pastch004.jpg';
import PastelImg005 from '../../../PastelImg/pastch005.jpg';
import PastelImg006 from '../../../PastelImg/pastch006.jpg';
import CardsPast from './CardsPast';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import Footer from '../Navbar/Footer';

const CatPal = () => {

  const [playSlider, setPlaySlider] = useState(true);

  return (
    <Fragment>
      <div>
        <NabvarPal />
        <div className='body-slider'>
          <div className="slider-container">
            {playSlider
              ?
              <FaPauseCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />
              :
              <FaPlayCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />

            }
            <div className={playSlider ? "slider play-run" : "slider play-stop"}>
              <div className='slider-past'>
                <img src={PastelImg004} alt="slide1" />
              </div>
              <div className='slider-past'>
                <img src={PastelImg005} alt="slide1" />
              </div>
              <div className='slider-past'>
                <img src={PastelImg006} alt="slide1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-container">
          <div className='grid-item1'>
            <div className="box-grid">
              <input type="text" placeholder="Buscar..." className="search-past" name="" id="" />
              <a href="#" className="btn-search">
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
            </div>
            <div>
              <h3 className='h3001'>Filtrar</h3>
              <div className="div-down">
                <div className="container-down">
                  <div className="row-down">
                    <p>Primero</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Segundo</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Tercero</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                  <div className="row-down">
                    <p>Cuarto</p>
                    <label className='label-down'>
                      <input type="checkbox" className='input-down' />
                      <span className='span-down'></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid-item2'>
            <CardsPast
              rutaProdu="produ"
              srcImg={PastelImg006}
              altImg="pastel-chocolate"
              namePastel="Pastel de Chocolate"
              pricePastel="$599"
            />
            <CardsPast
              rutaProdu="produ"
              srcImg={PastelImg006}
              altImg="pastel-fresas"
              namePastel="Pastel de Fresas"
              pricePastel="$899"
            />
            <CardsPast
              rutaProdu="produ"
              srcImg={PastelImg006}
              altImg="pastel-maracuya"
              namePastel="Pastel de Maracuya"
              pricePastel="$999"
            />
            <CardsPast
              rutaProdu="produ"
              srcImg={PastelImg006}
              altImg="pastel-vainilla"
              namePastel="Pastel de Vainilla"
              pricePastel="$499"
            />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default CatPal