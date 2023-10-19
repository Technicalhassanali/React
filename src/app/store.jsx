import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
// import { apiSlice } from '../features/api/apiSlice'

import { todoApi } from '../services/Todos';
import {pokemonApi} from '../services/pokemon';

import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // api:todoApi.reducer
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware,todoApi.middleware),
})

setupListeners(store.dispatch)


  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false,
  // }).concat(todoApi.middleware),
// });