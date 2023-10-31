import React from 'react';
import { Link } from 'react-router-dom';

function CardsPast(props) {
    return (
        <div>
            <div className="container004">
                <Link to={props.rutaProdu} className="link-card001">
                    <div className="card-1 card-div">
                        <div className="gow-img-div img-div">
                            <img src={props.srcImg} alt="god-of-war-figurine" />
                        </div>
                        <div className="text-container">
                            <h2 className="item-name">{props.namePastel}</h2>
                            {/* <p className="date"> Departure date: 31/03/2021 </p> */}
                            <div className="pricing-and-cart">
                                <div className="pricing">
                                    {/* <p className="previous-price">$999</p> */}
                                    <p className="current-price">{props.pricePastel}</p>
                                </div>
                                {/* <i className="fas fa-shopping-cart"></i> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardsPast