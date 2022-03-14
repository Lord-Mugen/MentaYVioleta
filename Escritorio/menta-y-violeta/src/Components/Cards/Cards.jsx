import React, { useState }from 'react';
import './Cards.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';



const Cards = ({id, category, name, price, img}) => {
  const [counter, setCounter] = useState(0);

  const handleAddItem = () =>{
    setCounter(counter+1);
  }

  const handleSubsItems = () =>{
    if (counter>0){
     setCounter(counter-1);
    }
  }

  return (
    <div>

        <div className="card">
            <div className="card__img">
                <img src={img} alt="prodimage" className="imagecard"/>
            </div>

            <div className="infocardcontainer">

              <div className="card__data">
                  <p className="product__name">{name}</p>
                  <p className="product__price">{price}</p>
              </div>

              <div className="plusMinus">
                <FontAwesomeIcon icon={faCircleMinus} className="minus" onClick={handleSubsItems}/>
                <p>{counter}</p>
                <FontAwesomeIcon icon={faCirclePlus} className="plus" onClick={handleAddItem }/>
              </div>

            </div>
        </div>
        
    </div>
  )
}

 
export default Cards