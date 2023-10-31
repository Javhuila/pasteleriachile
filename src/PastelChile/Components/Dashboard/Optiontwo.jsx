import React from 'react';
import Modal_Optiontwo from './Modal_Optiontwo';
import Modal_two_Optiontwo from './Modal_two_Optiontwo';
import Modal_three_Optiontwo from './Modal_three_Optiontwo';

function Optiontwo() {
    return (
        <div>
            <div>

                <div className="report-container">
                    <div className="report-header">
                        <h1 className="recent-Articles">Diagnosticar Productos</h1>
                        <Modal_Optiontwo />
                    </div>

                    <div className="report-body">
                        <div className="report-topic-heading">
                            <h3 className="t-op">ID</h3>
                            <h3 className="t-op">Nombre</h3>
                            <h3 className="t-op">Categoría</h3>
                            <h3 className="t-op">Precio</h3>
                            <h3 className="t-op text-center-t-op">Configuración</h3>
                        </div>

                        <div className="items">
                            <div className="item1">
                                <h3 className="t-op-nextlvl">1 </h3>
                                <h3 className="t-op-nextlvl">Pastel de Chocolate</h3>
                                <h3 className="t-op-nextlvl">Azucarado</h3>
                                <h3 className="t-op-nextlvl">3500000</h3>
                                <Modal_two_Optiontwo />
                                <Modal_three_Optiontwo />
                            </div>

                            <div className="item1">
                                <h3 className="t-op-nextlvl">2</h3>
                                <h3 className="t-op-nextlvl">Pastel de Fresas</h3>
                                <h3 className="t-op-nextlvl">Azucarado</h3>
                                <h3 className="t-op-nextlvl">3500000</h3>
                                <Modal_two_Optiontwo />
                                <Modal_three_Optiontwo />
                            </div>

                            <div className="item1">
                                <h3 className="t-op-nextlvl">3</h3>
                                <h3 className="t-op-nextlvl">Pastel de Maracuya</h3>
                                <h3 className="t-op-nextlvl">Azucarado</h3>
                                <h3 className="t-op-nextlvl">3500000</h3>
                                <Modal_two_Optiontwo />
                                <Modal_three_Optiontwo />
                            </div>

                            <div className="item1">
                                <h3 className="t-op-nextlvl">4</h3>
                                <h3 className="t-op-nextlvl">Pastel de Vainilla</h3>
                                <h3 className="t-op-nextlvl">Neutro</h3>
                                <h3 className="t-op-nextlvl">3500000</h3>
                                <Modal_two_Optiontwo />
                                <Modal_three_Optiontwo />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Optiontwo