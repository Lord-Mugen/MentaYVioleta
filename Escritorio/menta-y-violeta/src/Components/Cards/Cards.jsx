import React from 'react';
import imgcard from '../../Resources/Images/muneca.jpg'
import './Cards.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  return (
    <div>

        <div className="card">
            <div className="card__img">
                <img src={imgcard} alt="lildoll" className="imagecard"/>
            </div>

            <div className="infocardcontainer">

              <div className="card__data">
                  <p className="product__name">Infocard12345</p>
                  <p className="product__price">$10.000</p>
              </div>

              <div className="plusMinus">
                <FontAwesomeIcon icon={faCircleMinus} className="minus"/>
                <p>2</p>
                <FontAwesomeIcon icon={faCirclePlus} className="plus"/>
              </div>

            </div>


        </div>
    </div>
  )
}

export default Cards