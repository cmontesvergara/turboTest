import React from 'react';
import './Nbar.css';
import logo from '../../Logo/Simbolo.svg'
import closed from '../../Icons/plus-closed.svg'



class Nbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activado: false};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const burgermenu = document.getElementById("menuContent");
    const nbar = document.getElementById("Nbar");
    
    if(this.state.activado==false){
      this.setState({activado: true});
      burgermenu.style.display = 'flex'; 
      nbar.style.display = 'none'; 
      document.body.style.overflow = 'hidden'

    }else{
      this.setState({activado: false});
      burgermenu.style.display = 'none'; 
      nbar.style.display = 'flex'; 
      document.body.style.overflow ='visible'
    }
    
  }
  

  render() {
    return (
      // eslint-disable-next-line
      <React.Fragment>
        <nav id='Nbar' className='Nbar'>
          <div id='logoContent'>
            <a  href='/'><img  id='logo' alt='logo'></img></a>
            
          </div>
          <div>
            <a className='itemNbar' href='/' alt='numero de contacto'>+34 722 73 9622</a>
            <a id='itemContacto' className='itemNbar' href='/' alt='apartado contacto'>Contacto</a>
            <img id='burgerMenu' onClick={this.handleClick}></img>
          </div>
        </nav>
        <div id='menuContent' className='menuContent'>
          <div className='menu'>
            <div className='miniBar'>
              <a><img src={logo}></img></a>              
              <button className='closeMenu' onClick={this.handleClick}><img src={closed}></img>
              </button>
            </div>
            <a className='itemMenu activo'>Home</a>
            <a className='itemMenu'>Recomendaciones</a>
            <a className='itemMenu'>La Agencia</a>
            <a className='itemMenu'>Contacto</a>

          </div>

        </div>
      </React.Fragment>
    );
  }

 
}

export default Nbar;
