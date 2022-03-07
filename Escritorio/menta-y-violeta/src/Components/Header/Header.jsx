import React from 'react';
import imageHeader from '../../Resources/Images/HeaderImg';

const Header = () => {
  return (
    <div>
        <header>
            <img src={ imageHeader } alt="logo" className="header__img"/>
        </header>
    </div>
  )
}

export default Header