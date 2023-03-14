import { productsReducer } from './reducers/productsReducer';
import { counterReducer } from './reducers/counterReducer';
import usersReducer from './reducers/usersReducer';
import loaderSlice from './reducers/loaderSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      products: productsReducer,
      users: usersReducer,
      loader: loaderSlice,  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;