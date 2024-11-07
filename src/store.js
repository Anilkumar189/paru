import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { leadsApi } from "../services/leadsapi";

export const store =configureStore({
    reducer:{
        [leadsApi.reducerpath]:leadsApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(leadsApi.middleware),
})
setupListeners(store.dispatch)