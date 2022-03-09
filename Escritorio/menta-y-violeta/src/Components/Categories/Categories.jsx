import React from 'react'
import Button from '../Button/Button'
import './Categories.css'

const Categories = () => {
  return (
    <div className="catcontainer">
      <h2>Categorias</h2>
      <div className="categories">
          <Button cat='categ.1'/>
          <Button cat='categ.2'/>
          <Button cat='categ.3'/>
          <Button cat='categ.4'/>
          <Button cat='categ.5'/>
          <Button cat='categ.6'/>
          <Button cat='categ.7'/>
          <Button cat='categ.8'/>
          <Button cat='categ.9'/>
          <Button cat='categ.10'/>
      </div>
    </div>
  )
}

export default Categories