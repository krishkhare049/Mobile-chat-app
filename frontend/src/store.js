import { configureStore } from '@reduxjs/toolkit';
import loggedReducer from './loggedSlice';

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
  },
});