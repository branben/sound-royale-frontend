import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RoomNavBar from "../NavBar/RoomNavBar";

const API = process.env.REACT_APP_API_URL;

const RoomDetails = () => {
  const [tracks, setTracks] = useState([]);
  const [room, setRoom] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/rooms/${id}`)
      .then((res) => {
        // console.log(res.data);
        setRoom(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c);
      });
  }, [id, navigate]);

  useEffect(() => {
    axios
      .get(`${API}/tracks/`)
      .then((res) => {
        console.log(res.data);
        setTracks(res.data);
      })
      .catch((c) => {
        navigate("/404");
        console.error("catch", c);
      });
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/rooms/${room.id}/tracks/${tracks.id}`)
      .then(() => {
        navigate("/rooms/{room.id}");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(tracks.id)

  return (
    <div className="container">
      <RoomNavBar />
      <main className="container-tracks">
        <div>
          Room: {room.name}
          Description: {room.description}
        </div>
        <div className="tracks-list-container">
          <form onSubmit={handleSubmit}>
            <select>
              {tracks.map((track) => {
                return <option value={track.id}>{track.title}</option>;
              })}
            </select>
            <input className="submit" type="submit" value="submit" />
          </form>

          <div className="dlc">
            <div className="room-header">
              <div className="room-info">
                <div className="room-body"></div>
                <div className="room-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomDetails;
