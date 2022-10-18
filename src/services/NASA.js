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

    // Get all available rovers
    getRovers: builder.query({
      query: () => {
        return `mars-photos/api/v1/rovers?api_key=${nasaApiKey}`;

      }
    }),

    // Get specified rover info
    getRover: builder.query({
      query: ({ rover }) => {
        return `mars-photos/api/v1/rovers/${rover}?api_key=${nasaApiKey}`;
      }
    }),

    // //* Get Photos by [Type]
    getImages: builder.query({
      query: ({ rover, earthDate }) => {
        //* Get images by Rover
        if (earthDate) {
          return `mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&api_key=${nasaApiKey}`;
        } else {
          return `mars-photos/api/v1/rovers/${rover}/photos?api_key=${nasaApiKey}`;

        }
      },
    }),
  }),
});

export const {
  useGetAPODQuery, useGetImagesQuery, useGetRoverQuery, useGetRoversQuery
} = nasaApi;
