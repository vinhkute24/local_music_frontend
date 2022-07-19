
import { createSlice } from "@reduxjs/toolkit";
//import data from "../../data.json"
import axios from 'axios'


export const SongsSlice = createSlice({
    name: "songs",
    initialState: {
        songs: [],
    },
    reducers: {
        getListSong : (state,action) => {
            state.songs = action.payload ;
            
        }
    },
});
export const getListMusicAsync= () => async (dispatch) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/song/getList');
      dispatch(getListSong(response.data.songs));
        
    } catch (err) {
      throw new Error(err);
    }
  };

  
export const { getListSong } = SongsSlice.actions;
const {reducer: songsReducer, actions: songActions} = SongsSlice


export {songActions}
export default songsReducer;