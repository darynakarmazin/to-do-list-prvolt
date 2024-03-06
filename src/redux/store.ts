import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

const tasksPersistConfig = {
  key: "tasks",
  storage,
  whitelist: ["tasks"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["filters"],
};

export const store = configureStore({
  reducer: {
    tasks: persistReducer(tasksPersistConfig, tasksReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["transactions.date"],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
