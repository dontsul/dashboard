import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface ICustomer {
  customerName: string;
  company: string;
  phoneNumber: string;
  email: string;
  country: string;
  status: string;
}

interface customersState {
  users: ICustomer[];
  loading: boolean;
  error: boolean | string;
}

const initialState: customersState = {
  users: [],
  loading: false,
  error: false,
};

export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `users.json`,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users = action.payload;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const customersReducer = customersSlice.reducer;
export const {} = customersSlice.actions;
