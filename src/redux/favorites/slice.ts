import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "types/entities";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface FavoritesState {
  list: Vehicle[];
}

const initialState: FavoritesState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Vehicle>) => {
      state.list.push(action.payload);
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(({ id }) => id != action.payload);
    },
  },
});

const persistConfig = {
  key: "favorites",
  storage,
};

export const favoritesPersistedReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
