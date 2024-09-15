import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/artworksSlice';

function ArtworkModal() {
  const dispatch = useDispatch();
  const { isOpen, artwork } = useSelector(state => state.artworks.modal);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => dispatch(closeModal())}>×</button>
        <img src={artwork.image} alt={artwork.title} className="modal-image" />
        <h2>{artwork.title}</h2>
        <p>Artist: {artwork.artist}</p>
        <p>Year: {artwork.year}</p>
        <p>Medium: {artwork.medium}</p>
        <p>{artwork.description}</p>
      </div>
    </div>
  );
}

export default ArtworkModal;