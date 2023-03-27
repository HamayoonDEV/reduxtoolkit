import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import GroupsIcon from "@mui/icons-material/Groups";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MovieIcon from "@mui/icons-material/Movie";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HearingIcon from "@mui/icons-material/Hearing";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className="sidebar">
      <div className="sidebarlist">
        <ul>
          <li>
            <HomeIcon />
            <span>Homepage</span>
          </li>
          <li>
            <ListIcon />
            <span>List</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon />
            <span>Products</span>
          </li>
          <li>
            <GroupsIcon />
            <span>Groups</span>
          </li>
          <li>
            <FileCopyIcon />
            <span>Pages</span>
          </li>
          <li>
            <InsertPhotoIcon />
            <span>Photos</span>
          </li>
          <li>
            <MovieIcon />
            <span>Videos</span>
          </li>
          <li>
            <QueryBuilderIcon />
            <span>Schedule</span>
          </li>
          <li>
            <HearingIcon />
            <span>WishList</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout ({name})</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
