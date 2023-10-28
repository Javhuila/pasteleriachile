import React, { Fragment } from 'react'

function Modal_two_Optiontwo() {
  return (
    <Fragment>
        <div className="wrapper-modal">
                <a href="#demo-modal-two" className="btn-modal"
                    style={{
                        textDecoration: "none", padding: "15px", backgroundColor: "#5500cb", color: "white",
                        fontSize: "15px", borderRadius: "8px", cursor: "pointer"
                    }}>Modificar</a>
            </div>

            <div id="demo-modal-two" className="modal001">
                <div className="modal__content">
                    <h1>Modificando pastelitos</h1>
                    <p>
                        ¡Cambia o actualiza tus pastelitos!
                    </p>
                    <form action="" method='' className="form009">
                    <div className="form0010">                            
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Nombre' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Categoría' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="email" name="" id="" placeholder='Precio' className='input006' />
                                <span className="span007"></span>
                            </div>                            
                            <button type="submit" className="view001">Modificar</button>
                        </div>
                    </form>
                    <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
    </Fragment>
  )
}

export default Modal_two_Optiontwo