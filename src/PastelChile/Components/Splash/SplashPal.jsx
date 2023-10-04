import React from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';


function SplashPal() {
  return (
    <div>
      <NabvarPal />
        <div className="container001">
          <div className="imgcircle"><img className="img001" src={PastelImg002} alt=''/></div>
          <div className='text-001'>
            <h1 className='h1001'>Pastelería Chilena</h1>
          </div>        
        </div>      
    </div>
  )
}

export default SplashPal