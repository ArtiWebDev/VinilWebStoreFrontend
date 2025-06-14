import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import getBackendUrl from '../../utils/getBackendUrl.js'

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBackendUrl()}/api/vinyls`,
  credentials: 'include',
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem('token')
    if (token) {
      Headers.set('Authorization', `Bearer ${token}`)
    }
    return Headers
  },
})

const vinylsApi = createApi({
  reducerPath: 'vinylApi',
  baseQuery,
  tagTypes: ['Vinyls'],
  endpoints: (builder) => ({
    // GET Request
    fetchAllVinyls: builder.query({
      query: () => '/',
      providesTags: ['Vinyls'],
    }),
    fetchVinylById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Vinyls', id }],
    }),
    // Mutation !!!
    addVinyl: builder.mutation({
      query: (newVinyl) => ({
        url: '/create-vinyl',
        method: 'POST',
        body: newVinyl,
      }),
      invalidatesTags: ['Vinyls'],
    }),
    // Mutation !!!
    updateVinyl: builder.mutation({
      //.. rest - is actually a body
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: 'PUT',
        body: rest,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      // clear Tags
      invalidatesTags: ['Vinyls'],
    }),
    // Mutation !!!
    deleteVinyl: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vinyls'],
    }),
  }),
})

export const {
  useFetchAllVinylsQuery,
  useFetchVinylByIdQuery,
  useDeleteVinylMutation,
  useAddVinylMutation,
  useUpdateVinylMutation,
} = vinylsApi

export default vinylsApi
