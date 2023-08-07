import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { KEY } from '../../api/fetchApi';

export const getCities = createAsyncThunk('offices/getCities', async () => {
  try {
    const res = await axios.post('/', {
      apiKey: KEY,
      modelName: 'Address',
      calledMethod: 'getCities',
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const getWarehouses = createAsyncThunk(
  'offices/getWarehouses',
  async (cityName, { rejectWithValue }) => {
    try {
      const res = await axios.post('/', {
        apiKey: KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: cityName,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
