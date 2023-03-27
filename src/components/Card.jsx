import React from 'react'
import './styles/cardStyle.css';


function Card(props) {
  const { cat } = props

  return (
    <div className='card'>
      <img src={cat.url} alt={`Photo de ${cat.breeds[0].name}`} />
      <h2>{cat.breeds[0].name}</h2>
      <p>{cat.breeds[0].description}</p>
      <p>Origine : {cat.breeds[0].origin}</p>
    </div>
  )
}

export default Card
