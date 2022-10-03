import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
const HidMenu = () => {
  return (
    <div className="hid-menu">
      <div className="close">
        <IconButton>
          <Link to="/">
            <CloseIcon className="close-btn" />
          </Link>
        </IconButton>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/List">List</a>
        <a href="/">About</a>
        <a href="/">Events</a>
        <a href="/">Contact</a>{" "}
      </div>
      <div className="nav-btn">
        <Link to="/adminLogin">
          <div className="btn btn-adm">Admin</div>
        </Link>
        <Link to="/">
          <div className="btn btn-art">Artist</div>
        </Link>
      </div>
    </div>
  );
};

export default HidMenu;
