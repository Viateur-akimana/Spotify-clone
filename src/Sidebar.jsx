import React from "react";
import "./sidebar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { DataLayerValues } from "./DataLayer";

const Sidebar = () => {
    const [{playlists},dispatch] = DataLayerValues()
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOptions Icon={HomeIcon} title="Home" />
      <SideBarOptions Icon={SearchIcon} title="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} title="Your library" />
      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />
      {playlists?.item?.map((playlist) => {
        <SideBarOptions title={playlist.name} />
      })}
      
      <hr />
    </div>
  );
};

export default Sidebar;
