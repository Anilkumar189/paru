import { configureStore } from '@reduxjs/toolkit'
import { boardApi } from '../services/boardApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [boardApi.reducerPath]: boardApi.reducer,
  

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardApi.middleware),


})
setupListeners(store.dispatch)