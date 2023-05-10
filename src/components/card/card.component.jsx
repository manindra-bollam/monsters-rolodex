import React from 'react'

import './card.styles.css'

const Card = ({monster}) => {
  const {name,email,id} = monster
  const imageURL = `https://robohash.org/${id}?set=set2`
  return (
    <div className='card-container'>
        <img src={imageURL} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default Card