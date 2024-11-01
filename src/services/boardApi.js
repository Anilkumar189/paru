// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/board' }),
  endpoints: (builder) => ({ 
    getAllTodoLists: builder.query({
      query: () => "/",
    }),
    getTodoListsById:builder.query({
      query: (id) => `/${id}`,
    }),
    addNewTask:builder.mutation({
      query: (todolist) => ({
      url: `/${todolist.id}`,
      method: 'PUT',
      body:todolist,
    })
  }),
    addTodolist:builder.mutation({
      query: (body) => ({
      url: `/`,
      method: 'POST',
      body:body,
    })
  }),
  deleteTodolist:builder.mutation({
    query: (id) => ({
    url: `/${id}`,
    method: 'DELETE',
  })
}),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllTodoListsQuery ,
  useGetTodoListsByIdQuery,
  useAddNewTaskMutation,
  useLazyGetTodoListsByIdQuery,
  useAddTodolistMutation,
  useLazyGetAllTodoListsQuery,
  useDeleteTodolistMutation
}=boardApi;