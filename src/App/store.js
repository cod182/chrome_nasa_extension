import { configureStore } from '@reduxjs/toolkit';

import { nasaApi } from '../services/NASA';
import { imagesNasaApi } from '../services/ImagesNasa';

export default configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    [imagesNasaApi.reducerPath]: imagesNasaApi.reducer,

  },
});