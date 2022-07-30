import { Link } from "@mui/material";
import React from "react";
import "./style.css";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card">
      <img
        src={avatar_url}
        alt="avatar"
        style={{ width: "60px" }}
        className="avatar"
      />
      <h3> {login} </h3>
      <Link className="link_btn" to={html_url} />
    </div>
  );
};

export default UserItem;
