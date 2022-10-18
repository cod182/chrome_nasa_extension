import { configureStore } from '@reduxjs/toolkit';


import { nasaApi } from '../services/NASA';

export default configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
});
