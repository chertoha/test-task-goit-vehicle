import { configureStore } from "@reduxjs/toolkit";
import { advertsApi } from "./adverts/advertsApi";

export const store = configureStore({
  reducer: {
    [advertsApi.reducerPath]: advertsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(advertsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
