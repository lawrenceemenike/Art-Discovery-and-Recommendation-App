import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtworks } from '../redux/artworksSlice';

function ArtworkGrid() {
  const dispatch = useDispatch();
  const artworks = useSelector(state => state.artworks.items);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  return (
    <div className="artwork-grid">
      {artworks.map(artwork => (
        <div key={artwork.id} className="artwork-item">
          <img src={artwork.image} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <button className="favorite-btn">❤️</button>
        </div>
      ))}
    </div>
  );
}

export default ArtworkGrid;