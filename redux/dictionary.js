import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';
import axios from 'axios';

export const fetchReq = createAsyncThunk('fetchReq', async (paylaod) => {
  try {
    const response = await axios.get(URL + paylaod);
    return { success: response.data };
  } catch (error) {
    return { failed: error };
  }
});

const slice = createSlice({
  name: 'dictionary',
  initialState: {
    loading: false,
    notfound: false,
    result: [],
  },
  extraReducers: {
    [fetchReq.pending]: (state, action) => {
      state.notfound = false;
      state.loading = true;
    },
    [fetchReq.fulfilled]: (state, action) => {
      if (action.payload.failed) {
        state.notfound = true;
      } else if (action.payload.success) {
        state.result = action.payload.success;
      }
      state.loading = false;
    },
  },
});

export default slice.reducer;
