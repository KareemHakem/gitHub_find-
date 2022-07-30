import React from "react";
import { useState } from "react";
import axios from "axios";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import "./style.css";

const REACT_APP_GITHUB_CLIENT_ID = "61f13829ed33919aacde";
const REACT_APP_GITHUB_CLIENT_SECRET =
  "f2e74e4be1d7f94c2a871e1d5b8ffc7795f90cac";


export default function Search() {
  const [text, setText] = useState("");


  // const SearchUsers = async (text) => {
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setUsers(res.data.item);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // SearchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div className="inp">
          <PersonSearchIcon style={{ marginLeft: 10, color: "#485F6A" }} />
          <input
            name="search"
            value={text}
            placeholder="Search for User"
            onChange={(e) => text}
            type="search"
            className="in_put"
          />
        </div>

        <input value="search" type="submit" className="btn" />
      </form>
    </div>
  );  
}
