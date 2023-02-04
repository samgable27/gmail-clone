import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Header = () => {
  return (
    <div className="header">
      {/* LEFT */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
          alt=""
        />
      </div>

      {/* MIDDLE */}

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};
