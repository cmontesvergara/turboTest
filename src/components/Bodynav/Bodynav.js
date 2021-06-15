import React from 'react';
import './Bodynav.css'
class Bodynav extends React.Component {
  

  render() {
    return <nav className='bodyNav'>
                <a href='#textArticleIntro' alt='enlaceinterno'><button className='btnBodyNav activado'>Yes or no</button></a> 
                <a href='#textArticleNormal' alt='enlaceinterno' ><button className='btnBodyNav '>Hold</button></a> 
            </nav>
  }

}

export default Bodynav;
