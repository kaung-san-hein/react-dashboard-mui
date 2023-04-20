import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const SidebarCollapseButton = ({ route, view, open, activeRoute }) => {
  const { layout, path, icon, name } = view;
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: "var(--primary-color)",
          }}
        >
          {route.icon}
        </ListItemIcon>
        <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
        {open ? (
          collapse ? (
            <ExpandLess
              sx={{
                color: "var(--primary-color)",
              }}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "var(--primary-color)",
              }}
            />
          )
        ) : null}
      </ListItemButton>
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            component={Link}
            to={layout + path}
            selected={activeRoute}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "var(--primary-color)",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Collapse>
    </ListItem>
  );
};

export default SidebarCollapseButton;
