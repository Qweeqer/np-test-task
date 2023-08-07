import { createSlice } from '@reduxjs/toolkit';
import { ttnInfo } from './operations';

const initialState = {
  status: '',
  sentFrom: '',
  sentTo: '',
  waybillsList: [],
  errors: [],
  isLoading: false,
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    clearWaybills(state) {
      return {
        ...state,
        waybillsList: [],
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(ttnInfo.fulfilled, (state, action) => {
        return {
          ...state,
          status: action.payload.data[0]?.Status || '',
          sentFrom: action.payload.data[0]?.WarehouseSender || '',
          sentTo: action.payload.data[0]?.WarehouseRecipient || '',
          waybillsList: [
            ...new Set([
              ...state.waybillsList,
              ...action.payload.data.map(item => item.Number),
            ]),
          ],
          errors: action.payload.errors || [],
          isLoading: false,
        };
      })
      .addCase(ttnInfo.rejected, (state, action) => {
        return {
          ...state,
          errors: [action.payload.message],
          isLoading: false,
        };
      })
      .addCase(ttnInfo.pending, state => {
        return {
          ...state,
          isLoading: true,
        };
      });
  },
});

export const deliveryReducer = deliverySlice.reducer;
export const { clearWaybills } = deliverySlice.actions;
