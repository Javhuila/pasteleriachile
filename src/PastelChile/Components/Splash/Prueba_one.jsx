import React from 'react';
import { Link } from 'react-router-dom';

function Pruebas_one(props) {
  return (
    <div>
        <div className="container004">
        <Link to="produ" className="link-card001">
        <div className="card-1 card-div">
            <div className="text-container">
                <h2 className="item-name">{props.namePastel}</h2>
            </div>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Pruebas_one