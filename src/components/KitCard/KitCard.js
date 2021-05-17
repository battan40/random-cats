import React from 'react';
import PropTypes from 'prop-types';
import './KitCard.css';


const KitCard = ({ id, url, deleteForgoneInspiration, isFavorite, favoriteKit }) => {
  const favoriteKitten = isFavorite ? 'favorite' : 'kitten-card'
  return (
    <article className={favoriteKitten}>
      <img className='movie-image' src={url}/>
       <button onClick={()=> favoriteKit(id)}>💘</button>
       <button onClick={() => deleteForgoneInspiration(id)}>🗑</button>
    </article>
  )
}

export default KitCard;

// KitCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   removeIdea: PropTypes.func.isRequired,
//   isFavorite: PropTypes.bool.isRequired,
// };
//
// Card.defaultProps = {
//   isFavorite: true
// };
