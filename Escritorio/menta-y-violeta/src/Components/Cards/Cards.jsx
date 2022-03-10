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
            <div className="card__data">
                <h4 className="product__name">Infocard12345</h4>
                <h4 className="product__price">$10.000</h4>
            </div>
            <div className="plusMinus">
              <FontAwesomeIcon icon={faCircleMinus} className="minus"/>
              <FontAwesomeIcon icon={faCirclePlus} className="plus"/>
            </div>

        </div>
    </div>
  )
}

export default Cards