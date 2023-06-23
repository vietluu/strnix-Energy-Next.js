import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import newSlice from './slices/newSlice';
export const store = configureStore({
  reducer: {
    formReducer,
    newSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
