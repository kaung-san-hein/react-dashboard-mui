import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { PhoneNumberTextField } from "../components/input/withPhoneNumberTextField";
import { PasswordTextField } from "../components/input/withPasswordTextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(phoneNumber, password);
        navigate("/admin")
    };

    return (
        <Stack justifyContent="center">
            <Card
                sx={{
                    margin: "30px",
                    padding: "0px 30px 30px 30px",
                }}
            >
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h4"
                    sx={{
                        fontWeight: "bold",
                        marginTop: "30px",
                        color: "var(--primary-color)",
                    }}
                >
                    Login
                </Typography>

                <PhoneNumberTextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    margin="normal"
                />
                <PasswordTextField
                    label="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        marginTop: "18px",
                        bgcolor: "var(--primary-color)",
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Card>
        </Stack>
    );
};

export default Login;
