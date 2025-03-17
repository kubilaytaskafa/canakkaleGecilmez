import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false, // Değişken adı düzeltilmiş
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    toggleMusic: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { toggleMusic } = musicSlice.actions;
export default musicSlice.reducer;
