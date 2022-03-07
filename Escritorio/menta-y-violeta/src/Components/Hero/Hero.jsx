import './Hero.css';
import React from 'react';
import HeroImage from '../../Resources/Images/makeup.png';

const Hero = () => {
  return (
    <div className="container__hero">
      <section className="hero">
        <h1 className="hero__h1"> Bienvenidos<br/> a Menta y<br/> Violeta</h1> 
        <img src={HeroImage} alt="Hero image" className="header__img"/>
      </section>
    </div>
  )
}

export default Hero