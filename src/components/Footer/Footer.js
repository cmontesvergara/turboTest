import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  

  render() {
    return (
        <div className='container-footer'>
            <div className='main-footer'>
                <div className='main-footer__brand'>
                    <span></span>
                    <p>Uuummmm, this is a tasty burger!</p>
                </div>

                <div className='main-footer__contact'>
                    <h2>CONTACT</h2>
                    <a><h3>info@bukyapp.com</h3></a>
                    <a><h3>+34 722 73 96 22</h3></a>
                    <span>Calle Isaac Peral, 39,</span>
                    <span>35660, Las Palmas</span>
                </div>

                <div className='main-footer__explore'>
                    <h2>EXPLORA</h2>
                    <a>HOME</a>
                    <a>RECOMENDADOS</a>
                    <a>LA AGENCIA</a>
                    <a>CONTACTO</a>
                </div>

                

            </div>
            <div className='footer-footer'>
                <div className='footer-footer__social'>
                    <span className='footer-footer__social--facebook'></span>
                    <span className='footer-footer__social--instagram'></span>
                </div>
                <div className='footer-footer__anexos'>
                    <a>Aviso Legal</a>
                    <li></li>
                    <a>Politica de Cookies</a>
                    <li></li>
                    <a>Politica de Privacidad</a>
                </div>
            </div>
            <div className='footer-creditos'>
                    <span> &#64; Turbo Testing 2021</span>
                    <span>Disenado por juanjov.com</span>
                </div>
        </div>
    );
  }

  
}

export default Footer;
