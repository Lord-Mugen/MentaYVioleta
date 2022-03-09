import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse,  faCartShopping,faDollarSign} from '@fortawesome/free-solid-svg-icons';
//import {} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <>
        <footer className="navbar">
            <div className="nav__icon">
              <FontAwesomeIcon icon={faHouse} className="icon"/>
            </div>
            <div className="nav__icon">
              <FontAwesomeIcon icon={faCartShopping} className="icon"/>
            </div>
            <div className="nav__icon">
            <FontAwesomeIcon icon={faDollarSign} className="icon"/>
            </div>
        </footer>
    </>
  )
}

export default Navbar