import React from "react";
import { Link } from "react-router-dom";


const Room = ({ room}) => {




  return (
    <div className="room-card">
      <Link to={`/rooms/${room.id}`}>
      <h3> {room.name} </h3>
      </Link>
      <br />
      <div className="room-description">
        <br />
        {" "}
        <span> {room.description}</span>
        <br />
        <br />
        <div className="track-container">
      
      </div>
      </div>
    </div>
  );
};

export default Room;
