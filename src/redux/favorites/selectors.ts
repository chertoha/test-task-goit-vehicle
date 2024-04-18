import { RootState } from "redux/store";

export const selectfavorites = (state: RootState) => state.favorites.list;
