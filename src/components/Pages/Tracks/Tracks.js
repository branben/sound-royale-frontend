import { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../NavBar/NavBar";

import Track from "./Track";

const API = process.env.REACT_APP_API_URL;

const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/tracks`)
      .then((response) => {
        console.log(response);
        setTracks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Tracks">
      <NavigationBar/>
      <div className="track-container">
      <div className="track-info">
        {tracks.map((track) => {
          return <Track key={track.id} track={track} />;
        })}
      </div>
      </div>
      
    </div>
  );
};

export default Tracks;
