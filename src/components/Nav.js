import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/gov-logo.png"
            alt=""
          />
        </div>
        <div className="logo-txt">
          <div className="t-title">
            Ministry of sports and cultural activities Government of India
          </div>
          <h3 className="s-title">Government of India</h3>
        </div>

        <IconButton>
          <Link to="/hidMenu">
            <MenuIcon className="bar" />
          </Link>
        </IconButton>
      </nav>
    </>
  );
};

export default Nav;
