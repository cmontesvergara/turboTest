import Carousel from './components/Carousel/Carousel';
//importo el componente NavBar
import Nbar from './components/Nbar/Nbar'
import slide1 from './img/Blue_car.jpg';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Nbar></Nbar>
      <Carousel slide={slide1}></Carousel>
    </React.Fragment>
    
  );
}

export default App;
