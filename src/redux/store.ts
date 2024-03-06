import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { tasksReducer } from './tasksSlice'
import { filtersReducer } from './filtersSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks', 'filters']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date']
      }
    }),
  devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)
