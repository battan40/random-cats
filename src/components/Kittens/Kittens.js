import React, { Fragment }  from 'react';
import KitCard from '../KitCard/KitCard'
import './Kittens.css';

const Kittens = ({ kittens, deleteForgoneInspiration, favoriteKit }) => {
  const catCards = kittens.map(kit => {
    return(
      <KitCard
        id={kit.id}
        url={kit.webpurl}
        key={kit.id}
        isFavorite={kit.isFavorite}
        deleteForgoneInspiration={deleteForgoneInspiration}
        favoriteKit={favoriteKit}
      />
    )
  })

  return (
    <article className='kittens-container'>
      { catCards }
    </article>
  )
}

export default Kittens;
