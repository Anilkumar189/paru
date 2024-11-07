// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  endpoints: (build) => ({
    Login: build.mutation({
      query: (user) => ({
        url:`/login`,
        method:"POST",
        body:"user"
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  
} = leadsApi