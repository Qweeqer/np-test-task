import { createSlice } from '@reduxjs/toolkit';
import { getCities, getWarehouses } from './operations';

const initialState = {
  cities: [],
  offices: [],
  isWarehousesLoading: false,
  isLoading: false,
  error: '',
  city: '',
};

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {
    setCityName(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCities.fulfilled, (state, action) => {
        state.cities = action.payload.data;
        state.error = action.payload.errors?.join(' ') || '';
        state.isLoading = false;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.error = action.payload.errors?.join(' ') || '';
        state.isLoading = false;
      })
      .addCase(getCities.pending, state => {
        state.isLoading = true;
      })
      .addCase(getWarehouses.fulfilled, (state, action) => {
        state.offices = action.payload.data;
        state.error = action.payload.errors?.join(' ') || '';
        state.isWarehousesLoading = false;
      })
      .addCase(getWarehouses.rejected, (state, action) => {
        state.error = action.payload.errors?.join(' ') || '';
        state.isWarehousesLoading = false;
      })
      .addCase(getWarehouses.pending, state => {
        state.isWarehousesLoading = true;
      });
  },
});
export const officesReducer = officesSlice.reducer;
export const { setCityName } = officesSlice.actions;
