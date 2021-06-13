import React from 'react';
import './Igallery.css';


class Igallery extends React.Component {


  render() {
    return (
      <div className='container-itemGallery'>
        <div className='main-itemGallery' style={{ backgroundImage: `url(${this.props.fondo})` }}>
          <h3 className='main-itemGallery__titulo'>{this.props.titulo}</h3>
          <button className='main-itemGallery__button' alt='icon' ></button>
        </div>
      </div>
    );
  }


}

export default Igallery;
