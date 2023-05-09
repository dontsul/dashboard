import { configureStore } from '@reduxjs/toolkit';
import { customersReducer } from '../features/slices/customersSlice';
import { menuReducer } from '../features/slices/menuSlice';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
