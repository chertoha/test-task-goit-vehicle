import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./adverts/advertsApi";
import { favoritesPersistedReducer } from "./favorites/slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
    favorites: favoritesPersistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
