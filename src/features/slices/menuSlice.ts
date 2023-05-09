import { createSlice } from '@reduxjs/toolkit';

interface customersState {
  status: boolean;
}

const initialState: customersState = {
  status: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenu: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { handleMenu } = menuSlice.actions;
