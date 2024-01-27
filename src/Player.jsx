import React from "react";
import Sidebar from "./Sidebar"
import "./Player.css";
import Body from "./Body";

const Player = () => {
  return (
    <div className="player">
      <div className="content">
        {<Sidebar/>}
        {<Body/>}
      </div>
      {/* {footer} */}
    </div>
  );
};

export default Player;
