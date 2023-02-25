import { useState, useEffect } from "react";
import axios from "axios";
import Room from "./Room";
import NavigationBar from "./NavBar/NavBar";


const API = process.env.REACT_APP_API_URL;

const Rooms = ({updatingTracksForRoom, roomTracks}) => {
  const [rooms, setRooms] = useState([]);

 


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
  }, []);

 
 console.log(roomid)
  return (
    <div className="Rooms">
      <NavigationBar roomid={roomid}/>
      <header>
      
        <h3 className="title">Room List</h3>
      </header>
      <div className="data">
        <ul className="info">
          {rooms.map((room) => (
            <li className="room-cards" key={room.id}>
              {/* {setRoomID(room.id)} */}
              <Room key={room.id} room={room} updatingTracksForRoom={updatingTracksForRoom} roomTracks={roomTracks} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rooms;
