import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CustomTextField from "./CustomTextField";

const withPasswordTextField = (Component) => {
    return (props) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <Component
                {...props}
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    };
};

export const PasswordTextField = withPasswordTextField(CustomTextField)