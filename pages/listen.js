import React, { useMemo } from "react";
import Head from "next/head";

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import ReactAudioPlayer from "react-audio-player";
import css from "../styles/Login.module.css";
import { Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { songActions } from "../redux/slice/SongsSlice";
import { nowPlayingActions } from "../redux/slice/SongSlice";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { getListMusicAsync, showMusic } from "../redux/slice/SongsSlice";
import { getMusicAsync} from "../redux/slice/SongSlice";
// import FileReader from "filereader";




const listen = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.songs);

  //const songs = useSelector((state) => state.songs);

  const song = useSelector((state) => state.song.song);
  

  const songId = useState(1);
  
  //const url = URL.createObjectURL(song)
  // var frb = new FileReader();


  const songUrl = useMemo(() => {
    const blob = new Blob([song], { type: 'audio/mpeg'})
    return URL.createObjectURL(blob)
  }, [song])


  console.log(songUrl)

  const player = (songKey) => {
    songId = songKey
    dispatch(getMusicAsync(songId));
  };

  useEffect(() => {
    dispatch(getListMusicAsync());
  }, []);

  return (
    <div>
      <Head>
        <title>Listen Page</title>
      </Head>

      <div className={css.mx_auto}>
        <table className="table-auto w-full">
          <thead className="text-white h-12">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
           <tbody>
          {list.songs.length > 0 && list.songs.map((song, index) => (
            
            <tr className={css.song}  
              onClick={() => player(song.id)}
              key={index}>
              <td>{index + 1}</td>
              <td>{song.song_title}</td>
              <td >{song.song_artist}</td>
            </tr>
          ))}
        </tbody> 
        </table>
        {/* <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>  */}
       <AudioPlayer
          src={songUrl}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          type="audio/mpeg"
        />  

        <div></div>
      </div>
    </div> 
  );
};

export default listen;
