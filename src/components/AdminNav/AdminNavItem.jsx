import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./AdminNav.css";

export default function AdminNavItem({ component: Component, route, text }) {
  return (
    <div>
      <Link to={route} style={{ color: "black" }}>
        <ListItem button key={text} className="admin-nav-text">
          <ListItemIcon>
            <Component style={{ color: "#ef6c00" }} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </div>
  );
}
