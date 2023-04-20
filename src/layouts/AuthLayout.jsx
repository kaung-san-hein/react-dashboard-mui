import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const AuthLayout = () => {
  return (
    <Container maxWidth="sm">
      <Stack justifyContent="center">
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "bold",
            marginTop: "30px",
            color: "var(--primary-color)",
          }}
          align="center"
        >
          React Dashboard MUI
        </Typography>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
