import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Track = ({ track }) => {





const API = process.env.REACT_APP_API_URL;
let { id } = useParams();
let navigate = useNavigate();

function handleDelete(e) {
  e.preventDefault();
  axios
    .delete(`${API}/tracks/${id}`)
    .then(function (response) {
      navigate("/");
    });
}




  return (
    <div className="track-card">
      <Link to={`/tracks/${track.id}`}>
      <h3> {track.title} </h3>
      </Link>
      <br />
      <div className="track-description">
        <br />
        {" "}
        <span> {track.description}</span>
        <br />
        <br />
        <div className="track-container">
      <span>{track.runtime}</span>
      <br/>
      <br/>
      <span>{track.album}</span>
      <br/>
      <br/>
      <div dangerouslySetInnerHTML={{__html:track.link}}></div>
      </div>
      </div>
      <div className="edit-btn">
            <Link to={`/tracks/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div className="delete-btn">
           <button onClick={handleDelete}> Delete Track </button>
          </div>
    </div>
  );
};

export default Track;
