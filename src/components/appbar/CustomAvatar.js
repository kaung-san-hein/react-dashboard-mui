import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import avatar from '../../assets/images/avatar.jpeg'

const CustomMenuItemIcon = ({ name, icon: Component }) => {
    return (
        <>
            <ListItemIcon>
                <Component fontSize="small" sx={{ color: "var(--primary-color)" }} />
            </ListItemIcon>
            {name}
        </>
    );
};

const settings = [
    {
        name: "Mr.Developer",
        icon: AccountCircleIcon,
    },
    {
        name: "Developer",
        icon: VerifiedUserIcon,
    },
    {
        name: "Change Password",
        icon: SettingsSuggestIcon,
    },
    {
        name: "Logout",
        icon: Logout,
    },
];

const CustomAvatar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Avatar" src={avatar} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem>
                    <Typography
                        subtitle1="h6"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        Welcome
                    </Typography>
                </MenuItem>
                {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <CustomMenuItemIcon name={setting.name} icon={setting.icon} />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default CustomAvatar;
