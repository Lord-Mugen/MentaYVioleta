import './Hero.css';
import React from 'react';
import HeroImage from '../../Resources/Images/makeup.png';

const Hero = () => {
  return (
    <div className="container__hero">
      <section className="hero">
        <h1 className="hero__h1"> Bienvenidos<br/> a Mentta y<br/> Violetta</h1> 
        <div className="imgContainer">
          <img src={HeroImage} alt="Hero image" className="hero__img"/>
        </div>
      </section>
    </div>
  )
}

export default Hero