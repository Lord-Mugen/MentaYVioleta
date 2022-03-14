import React from 'react'
import Button from '../Button/Button'
import './Categories.css'
import data from '../../Data/Commodity.json';




const Categories = () => {
    const { categories} = data;
  return (
    <div className="catcontainer">
      <h2>Categorías</h2>
      <div className="categories">
          {
            categories.map(Categ => (
            <Button key={Categ.id} cat={Categ.nameCategory}/>))
          } 
      </div>
    </div>
  )
}

export default Categories