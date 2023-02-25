import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../NavBar/NavBar";

function EditTrack() {
  const [track, setTrack] = useState({});

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${API}/tracks/${id}`, track)
      .then(function (response) {
        navigate(`/tracks/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(`${API}/${id}`).then((res) => {
      setTrack(res.data);
    });
  }, [API, id]);

  return (
    <div>
      <NavigationBar/>
      <br/>
      <br/>
      <div className="edit-form-handle">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label for="title">Title</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, title: e.target.value })
          }
          id="title"
          name="title"
          type="text"
          value={track.title}
        />

        <label for="runtime">Runtime</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, runtime: e.target.value })
          }
          id="runtime"
          name="runtime"
          type="text"
          value={track.runtime}
        />

        <label for="date">Date</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, date: e.target.value })
          }
          id="date"
          name="date"
          type="date"
          value={track.date}
        />

        <label for="link">Link</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, from: e.target.value })
          }
          id="link"
          name="link"
          type="text"
          value={track.link}
        />

        <label for="description">Description</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, description: e.target.value })
          }
          id="description"
          name="description"
          type="text"
          value={track.description}
        />

        <label for="album">Album</label>
        <input
          onChange={(e) =>
            setTrack({ ...track, album: e.target.value })
          }
          id="album"
          name="album"
          type="text"
          value={track.album}
        />
        <input type="submit" value="submit" />

      </form>
      </div>
    </div>
  );
}

export default EditTrack;
