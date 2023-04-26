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
import PropTypes from "prop-types";
import CustomSidebarIcon from "./CustomSidebarIcon";

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
          <CustomSidebarIcon icon={route.icon} />
        </ListItemIcon>
        <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
        {open ? (
          collapse ? (
            <ExpandLess
              sx={{
                color: "var(--primary-color)",
              }}
              fontSize="small"
            />
          ) : (
            <ExpandMore
              sx={{
                color: "var(--primary-color)",
              }}
              fontSize="small"
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
              <CustomSidebarIcon icon={icon} />
            </ListItemIcon>
            <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Collapse>
    </ListItem>
  );
};

SidebarCollapseButton.propTypes = {
  route: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  view: PropTypes.shape({
    layout: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  activeRoute: PropTypes.bool.isRequired,
};

export default SidebarCollapseButton;
