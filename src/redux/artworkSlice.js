import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArtworksFromAPI } from '../services/api';

export const fetchArtworks = createAsyncThunk(
  'artworks/fetchArtworks',
  async () => {
    const response = await fetchArtworksFromAPI();
    return response.data;
  }
);

const artworksSlice = createSlice({
  name: 'artworks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default artworksSlice.reducer;