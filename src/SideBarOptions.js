import React from "react";

const SideBarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOptions;
