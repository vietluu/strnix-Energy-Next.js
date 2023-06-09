import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice/formSlice'
export const store = configureStore({
    reducer: {
      formReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;