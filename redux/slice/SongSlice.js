
import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json"
import axios from 'axios'
const API_URL = "http://127.0.0.1:5000/song"

export const SongSlice = createSlice({
    name: "song",
    initialState: {
        song:  {    
        },
    },
    reducers: {
        getSongById: (state, actions) => {
            state.song = data.find(song => song.key == actions.payload);
        },
        getSong : (state,action) => {
            state.song = action.payload ;
            
        }
        
    },

    
});


export const getMusicAsync= (id) => async (dispatch) => {
    
      const response = await axios.get(`${API_URL}/${id}`);
      dispatch(getSong(response.data));
      

    
  };

export const { getSong } = SongSlice.actions;
const {reducer: songReducer, actions: nowPlayingActions} = SongSlice

export {nowPlayingActions}
export default songReducer;