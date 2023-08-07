import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { KEY } from '../../api/fetchApi';

export const ttnInfo = createAsyncThunk(
  'delivery/ttnInfo',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/', {
        apiKey: `${KEY}`,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: `${credentials}`,
            },
          ],
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
