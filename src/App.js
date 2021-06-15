import Carousel from './components/Carousel/Carousel';
//importo el componentes
import Nbar from './components/Nbar/Nbar'
import Gallery from './components/Gallery/Gallery'
import Bodynav from './components/Bodynav/Bodynav'
import Textintro from './components/Textintro/Textintro'
import Article from './components/Article/Article'
import Footer from './components/Footer/Footer';
// importo imagenes
import articleImage from './img/Red02_car.jpg'
import articleImage2 from './img/White_car.jpg'
import './App.css'

import React from 'react';
function App() {
  
  
  return (
    <React.Fragment>
      <Nbar/>
      <Carousel />
      <Bodynav/>
      <Textintro/>    
      <Gallery/>
      <Article 
      titulo='Hold on to your butts' idText='textArticleNormal'
      parrafo={<p>Well, the way they make shows is, <strong>they make one show.</strong> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>} 
      imagen={articleImage}
      />

      <Article idImg='imgArticleInverteded' idText='textArticleInverteded'
      titulo='Hold on to your butts' 
      parrafo={<p>Well, the way they make shows is, <strong>they make one show.</strong> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>}
       imagen={articleImage2}
       />
      <Footer/>
    </React.Fragment>
    
  );
}

export default App;
