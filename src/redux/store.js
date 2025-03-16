import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./slices/heroeSlice";
export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});
