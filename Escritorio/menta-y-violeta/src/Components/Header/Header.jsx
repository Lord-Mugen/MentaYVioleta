import React from 'react';
import imageHeader from '../../Resources/Images/HeaderImg.png';
import './Header.css'

const Header = () => {
  return (
    <div>
        <header className="header">
            <img src={imageHeader} alt="Logo" className="header__img"/>
        </header>
    </div>
  )
}

export default Header