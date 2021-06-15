import React from 'react';
import './Gallery.css'
import Igallery from '../Igallery/Igallery';
import fondo1 from '../../img/Rain_car.jpg';
import fondo2 from '../../img/Bluesky_car.jpg';
import fondo3 from '../../img/Black_car.jpg';
import fondo4 from '../../img/Red_car.jpg';
import fondo5 from '../../img/Stop_car.jpg';
import fondo6 from '../../img/VW_car.jpg';



class Gallery extends React.Component {
  

  render() {
    return (
        <div className='container-gallery'>
            <Igallery titulo='Title Project' fondo={fondo1}></Igallery>
            <Igallery titulo='Title Project' fondo={fondo2}></Igallery>
            <Igallery titulo='Title Project' fondo={fondo3}></Igallery>
            <Igallery titulo='Title Project' fondo={fondo4}></Igallery>
            <Igallery titulo='Title Project' fondo={fondo5}></Igallery>
            <Igallery titulo='Title Project' fondo={fondo6}></Igallery>
            
        </div>
    );
  }

  
}

export default Gallery;
