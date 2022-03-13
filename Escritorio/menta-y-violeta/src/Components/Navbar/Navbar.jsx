import React from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse,  faCartShopping,faDollarSign} from '@fortawesome/free-solid-svg-icons';
//import {} from '@fortawesome/free-brands-svg-icons';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <footer className="navbar">
          <Link to="/"></Link>

            <Link   to="/Main/*">
              <div className="nav__icon">
                  <FontAwesomeIcon icon={faHouse} className="icon"/>
              </div>
            </Link>

            <Link to="/CartScreen/*">
              <div className="nav__icon">
                <FontAwesomeIcon icon={faCartShopping} className="icon"/>
              </div>
            </Link>

            <Link to="/">
              <div className="nav__icon">
              <FontAwesomeIcon icon={faDollarSign} className="icon"/>
              </div>
            </Link>

        </footer>
    </>
  )
}

export default Navbar