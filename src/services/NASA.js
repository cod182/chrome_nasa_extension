import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const nasaApiKey = process.env.REACT_APP_NASA_KEY;

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nasa.gov/' }),
  endpoints: (builder) => ({

    //* Get Astronomy Photo Of the Day
    getAPOD: builder.query({
      query: () => `planetary/apod?api_key=${nasaApiKey}&thumbs=True`,
    }),
  }),
});

export const {
  useGetAPODQuery, useGetImageQuery,
} = nasaApi;
