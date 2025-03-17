import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./slices/heroeSlice";
import musicReducer from "./slices/musicSlice";
export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    music: musicReducer,
  },
});
