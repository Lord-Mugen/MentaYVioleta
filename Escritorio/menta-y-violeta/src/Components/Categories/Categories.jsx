import React from 'react'
import Button from '../Button/Button'
import './Categories.css'

const category=[

  
    {
        "id":1,
        "nameCategory":"Recomendados"
    },
    {
        "id":2,
        "nameCategory":"Cejas"
    },
    {
        "id":3,
        "nameCategory":"Cuidado facial y corporal"
    },
    {
        "id":4,
        "nameCategory":"Delineadores"
    },
    {
        "id":5,
        "nameCategory":"Extra importantes"
    },
    {
        "id":6,
        "nameCategory":"Iluminadores"
    },
    {
        "id":7,
        "nameCategory":"Labiales"
    },
    {
        "id":8,
        "nameCategory":"Paletas todo en uno"
    },
    {
        "id":9,
        "nameCategory":"Pestañas"
    },
    {
        "id":10,
        "nameCategory":"Piel"
    },
    {
        "id":11,
        "nameCategory":"Primer piel"
    },
    {
        "id":12,
        "nameCategory":"Rubores"
    },
    {
        "id":13,
        "nameCategory":"Sombras"
    }
]

const Categories = () => {
  return (
    <div className="catcontainer">
      <h2>Categorías</h2>
      <div className="categories">
          {
            category.map(Categ => (
            <Button key={Categ.id} cat={Categ.nameCategory}/>))
          }
      </div>
    </div>
  )
}

export default Categories