import React, { Fragment } from 'react';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';
import PastelImg030 from '../../../PastelImg/pastch030.svg';
import NabvarPal from '../Navbar/NabvarPal';
import CardProdu from './cardProdu';
import CommentProdu from './commentProdu';
import Footer from '../Navbar/Footer';

function ProductPal() {
  return (
    <Fragment>
      <NabvarPal />
      <div className="container001">
        <div>
          <img className="img003" src={PastelImg002} alt='' />
        </div>
        <div className="text-002">
          <h1>Nombre  del Producto</h1>
          <p className='text-006'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque explicabo quibusdam consequatur at harum, corrupti dolores, commodi omnis tenetur officia, ratione doloribus eligendi. Pariatur velit blanditiis explicabo suscipit alias.
          </p>
          <h5 className='text-006'>Precio:<span>$ 25.50</span></h5>
        </div>
      </div>
      <div>
        <CardProdu />
      </div>
      <div className='comments-container'>
        <h1>Comentarios sobre el producto</h1>
        <CommentProdu
          ImgAvatar={PastelImg030}
          NameAvatar="Agustín Ortíz"
          CommentAvatar="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
        />
        <CommentProdu
          ImgAvatar={PastelImg030}
          NameAvatar="María Lopéz"
          CommentAvatar="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
        />
        <CommentProdu
          ImgAvatar={PastelImg030}
          NameAvatar="Fernando Castro"
          CommentAvatar="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
        />
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default ProductPal