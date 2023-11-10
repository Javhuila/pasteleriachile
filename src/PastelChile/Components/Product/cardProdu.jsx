import React, { Fragment } from 'react';
import PastelImg099 from '../../../PastelImg/pastch099.jpg';


function cardProdu() {
  // document.querySelectorAll(".projcard-description").forEach(function(box) {
  //     $clamp(box, {clamp: 6});
  //   });   
  return (
    <Fragment>
      <div className="projcard-container">
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src={PastelImg099} alt='Imagen valoración' />            
            <div className="projcard-textbox">
              <div className="projcard-title">Comenta sobre el producto</div>
              <div className="projcard-subtitle">Califica</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                <form action="" method='' className="form0011">
                  <div className="form0010">
                    <div className="input005">
                      <input type="text" name="" id="" placeholder='Nombre' className='input-projcard' />
                      <span className="span007"></span>
                    </div>
                    <div className="input005">
                      <textarea name="" rows="6" cols="70" id="" placeholder='Comentario' className='input-projcard' />
                      <span className="span007"></span>
                    </div>
                    <button type="submit" className="view001 btn-projcard">Enviar</button>
                  </div>
                </form>
              </div>
              <div className="projcard-tagbox001">
                <div className="projcard-tagbox002">
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                  <input type="radio" name="start5" id="" className='projcard-tagbox003' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default cardProdu