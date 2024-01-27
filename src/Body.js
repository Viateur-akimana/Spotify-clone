import React from "react";

import "./body.css";
import Header from "./Header";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src="" alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>Description ...</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
