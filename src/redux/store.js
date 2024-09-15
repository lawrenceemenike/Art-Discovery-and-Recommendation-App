import { configureStore } from '@reduxjs/toolkit';
import artworksReducer from './artworksSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    favorites: favoritesReducer,
  },
});

export default store;