import React from 'react'
import Cards from '../Cards/Cards'
import './Product.css';
import data from '../../Data/Commodity.json';





const Product = () => {
    const { infoProduct} = data;

  return (
    <div className="prodcontainer">
        <h3>Recomendados</h3>
        <div className="products"> 
          {
            infoProduct.map(prod =>(
              <Cards key={prod.id} img={prod.imgThumbs} name={prod.nameProduct} price={prod.price}/>
            ))
          }           
        </div>
    </div>
  )
}

export default Product