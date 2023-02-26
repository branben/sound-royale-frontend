import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../NavBar/NavBar";
import "./NewRoom.css";


const API = process.env.REACT_APP_API_URL;

const NewRoomForm = ({roomid}) => {
    const navigate = useNavigate();

 

console.log(roomid)

    const [name, setName] = useState("");
  
    const [description, setDescription] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        axios
          .post(`${API}/rooms`, {
            name,
            description,
          })
          .then(() => {
            navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
      return (
        <div>
            <NavigationBar/>
            <br/>
            <br/>
            <div className="main-form">
            <form onSubmit={handleSubmit} className="form-input">
            <label htmlFor="name" className="new_labels">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              type="name"
              value={name}
            />
    <br/>
    <br/>
            <label htmlFor="description" className="new_labels">
              Description:
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              type="description"
              value={description}
            />
    
            <br />
    
            <input
              classname="new-submit"
              type="submit"
              value="submit"
            
            />
          </form>
            </div>
         
        </div>
      );
    };
    
    export default NewRoomForm;
     