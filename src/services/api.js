import axios from 'axios';

const API_BASE_URL = 'https://api.artsy.net/api';
const API_KEY = 'YOUR_ARTSY_API_KEY';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-XAPP-Token': API_KEY,
  },
});

export const fetchArtworksFromAPI = () => {
  return api.get('/artworks');
};

export const fetchArtworkDetails = (id) => {
  return api.get(`/artworks/${id}`);
};

export default api;