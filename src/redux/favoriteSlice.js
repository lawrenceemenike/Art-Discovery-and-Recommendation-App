import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't favorited any artworks yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(artwork => (
            <li key={artwork.id} className="favorite-item">
              <img src={artwork.image} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <button onClick={() => dispatch(removeFavorite(artwork.id))}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;