import React, { useState }from 'react';
import imgcard from '../../Resources/Images/muneca.jpg'
import './Cards.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
/* import {faCirclePlus } from '@fortawesome/free-regular-svg-icons'
 */import {productos} from '../../Data/datosPrueba';
/* const productimages= require.context('../../Resources/Images/CEJAS', true);
 */

console.log(productos);

const Cards = () => {
  const [counter, setCounter] = useState(0);
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
                <FontAwesomeIcon icon={faCircleMinus} className="minus" onClick={()=>setCounter(() => counter-1)}/>
                <p>{counter}</p>
                <FontAwesomeIcon icon={faCirclePlus} className="plus" onClick={()=>setCounter(() => counter+1)}/>
              </div>

            </div>
        </div>
        
    </div>
  )
}

export default Cards