import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Web from 'src/components/Web/Web';
import AboutUs from './components/Pages/About/src/components/AboutUs/AboutUs';
import Rooms from './components/Pages/Rooms';
import NewRoomForm from './components/Pages/NewRoom/NewRoom';
import RoomDetails from "../src/components/Pages/RoomCreate/RoomDetails"
import NewTrack from "../src/components/Pages/Tracks/NewTrack"
import Track from "../src/components/Pages/Tracks/Track"
import axios from 'axios';
import Tracks from './components/Pages/Tracks/Tracks';
import EditTrack from "../src/components/Pages/Tracks/EditTrack"

function App() {

  const API = process.env.REACT_APP_API_URL;

const tracks = {};


const [rooms, setRooms] = useState([]);
const [roomTracks, setRoomTracks] = useState(tracks);
const [AllTracks, setAllTracks] = useState([])
const [roomID, setRoomID] = useState([])


// rooms.forEach((room) => (tracks[room.id])

function updatingTracksForRoom(roomID, trackID, track){
  roomTracks[roomID].push({
    trackID, track
  });
  setRoomTracks({ ...roomTracks})
}


useEffect(() => {
  axios
    .get(`${API}/tracks`)
    .then((response) => {
      console.log(response);
      setAllTracks(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [API]);

useEffect(() => {
  axios
    .get(`${API}/rooms`)
    .then((response) => {
      console.log(response);
      setRooms(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [API]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Web />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/rooms' element={<Rooms  />}/>
          <Route path="/rooms/new" element={<NewRoomForm />} />
          <Route path="/rooms/:id" element={<RoomDetails updatingTracksForRoom={updatingTracksForRoom} roomTracks={roomTracks} />}/>
          <Route path="/tracks" element={<Tracks/>}/>
          <Route path="/tracks/new" element={<NewTrack/>}/>
          <Route path="/tracks/:id" element={<Track/>}/>
          <Route path="/tracks/:id/edit" element={<EditTrack/>}/>
        </Routes>
        
      
      
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
