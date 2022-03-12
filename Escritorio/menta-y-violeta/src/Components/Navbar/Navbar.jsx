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

            <NavLink   to="/Main">
              <div className="nav__icon">
                  <FontAwesomeIcon icon={faHouse} className="icon"/>
              </div>
            </NavLink>

            <NavLink to="/CartScreen">
              <div className="nav__icon">
                <FontAwesomeIcon icon={faCartShopping} className="icon"/>
              </div>
            </NavLink>

            <NavLink to="/">
              <div className="nav__icon">
              <FontAwesomeIcon icon={faDollarSign} className="icon"/>
              </div>
            </NavLink>

        </footer>
    </>
  )
}

export default Navbar