import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TracksNav from "../NavBar/TracksNav";

const API = process.env.REACT_APP_API_URL;

const TracksNewForm = () => {
  const navigate = useNavigate();
 

  const [title, setTitle] = useState("");

  const [runtime, setRunTime] = useState("");

  const [date, setDate] = useState("");

  const [link, setLink] = useState("");

  const [description, setDescription] = useState("");

  const [album, setAlbum] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/tracks`, {
        title,
        runtime,
        date,
        link,
        description,
        album,
      })
      .then(() => {
        navigate("/rooms");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
    <TracksNav/>
    <div className="main-form">
      <form onSubmit={handleSubmit} className="form-input">
      <br/>
        <label htmlFor="title" classtitle="new_labels">
          Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          title="title"
          type="text"
          value={title}
        />
<br/>
        <label htmlFor="runtime" classtitle="new_labels">
          Runtime:
        </label>
        <input
          onChange={(e) => setRunTime(e.target.value)}
          id="runtime"
          title="runtime"
          type="runtime"
          value={runtime}
        />
<br/>
        <label htmlFor="date" classtitle="new_labels">
          Date:
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          id="date"
          title="date"
          type="date"
          value={date}
        />
<br/>
        <label htmlFor="link" classtitle="new_labels">
          Link:
        </label>
        <input
          onChange={(e) => setLink(e.target.value)}
          id="link"
          title="link"
          type="text"
          value={link}
        />
<br/>
        <label htmlFor="description" classtitle="new_labels">
          Description:
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          title="description"
          type="text"
          value={description}
        />
<br/>
<label htmlFor="album" classtitle="new_labels">
          Album:
        </label>
        <input
          onChange={(e) => setAlbum(e.target.value)}
          id="album"
          title="album"
          type="text"
          value={album}
        />

        <br />

        <input
          classtitle="new-submit"
          type="submit"
          value="submit"
        />
      </form>
    </div>
    </>
  );
};

export default TracksNewForm;
