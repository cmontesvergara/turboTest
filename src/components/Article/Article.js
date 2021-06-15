import React from 'react';
import './Article.css';



class Article extends React.Component {
    

  render() {
    return (
        <div className='container-article'>
            <div className='main-article'>
                <div id={this.props.idText} className='main-article__text'>
                    <h2>{this.props.titulo}</h2>
                    <p>{this.props.parrafo}</p>
                    <button className='btnContactanos'>Conocenos</button>
                </div>
                <div id={this.props.idImg} className='main-article__image'>
                    <img src={this.props.imagen} alt='imagen'></img>
                </div>

            </div>
        </div>
    );
  }

}

export default Article;
