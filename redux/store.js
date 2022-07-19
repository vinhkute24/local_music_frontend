import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./slice/SongSlice"
import songsReducer from "./slice/SongsSlice"


export const store = configureStore({
  reducer:{
      song: songReducer,
      songs: songsReducer,
  },
});