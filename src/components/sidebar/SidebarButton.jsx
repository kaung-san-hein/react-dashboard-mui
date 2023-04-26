import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CustomSidebarIcon from "./CustomSidebarIcon";

const SidebarButton = ({ route, open, activeRoute }) => {
  const { layout, path, icon, name } = route;

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
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
    </ListItem>
  );
};

SidebarButton.propTypes = {
  route: PropTypes.shape({
    layout: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  activeRoute: PropTypes.bool.isRequired,
}

export default SidebarButton;
