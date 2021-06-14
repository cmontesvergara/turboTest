import React from 'react';
// Importo  swiper
import {Swiper, SwiperSlide} from 'swiper/react';
//importo el core y los componentes que necesito
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
//importo los estilos propios de swiper y de sus componentes internos
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
//importo mis estilos personalizados
import './Carousel.css';


// declaro el uso de los modulos de swiper
SwiperCore.use([Pagination,Navigation]);

class Carousel extends React.Component {
  

  render() {
    return (
        <React.Fragment>
            
            <Swiper pagination={{"type": "fraction"}} navigation={true} id='carousel' className="carousel" >
                <SwiperSlide className="slideCarousel" >
                    <div className='slideContent'>
                        <div className='slideBody'>
                            <h2>Are you ready for the truth?</h2>
                            <h3>Well, the way they make shows is, they make one show. That show's called a pilot.</h3>
                            <button className='btnContactanos'>Contáctanos<img id='arrowRigth' alt='iconbutton'></img></button>
                        </div>                        
                    </div>                    
                </SwiperSlide>

                <SwiperSlide className="slideCarousel" >
                    <div className='slideContent'>
                        <div className='slideBody'>
                            <h2>Are you ready for the truth?</h2>
                            <h3>Well, the way they make shows is, they make one show. That show's called a pilot.</h3>
                            <button className='btnContactanos'>Contáctanos<img id='arrowRigth' alt='iconbutton'></img></button>
                        </div>                        
                    </div>                    
                </SwiperSlide>

                
                
                
                
            </Swiper>
        </React.Fragment>
    );
  }

}

export default Carousel;
