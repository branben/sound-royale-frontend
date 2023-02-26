import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Web from 'src/components/Web/Web';
import AboutUs from './components/Pages/About/src/components/AboutUs/AboutUs';
import Rooms from './components/Pages/Rooms';
import NewRoomForm from './components/Pages/NewRoom/NewRoom';
import RoomDetails from "../src/components/Pages/RoomCreate/RoomDetails"
import NewTrack from "../src/components/Pages/Tracks/NewTrack"
import Track from "../src/components/Pages/Tracks/Track"
import Tracks from './components/Pages/Tracks/Tracks';
import EditTrack from "../src/components/Pages/Tracks/EditTrack"

function App() {







  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Web />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/rooms' element={<Rooms  />}/>
          <Route path="/rooms/new" element={<NewRoomForm />} />
          <Route path="/rooms/:id" element={<RoomDetails />}/>
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
