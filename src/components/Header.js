import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const logout = () => {
    window.location.reload();
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    history.push("/");
  };
  const history = useHistory();
  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Link>
      </Box>

      {children}

      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />

            <p className="username-text">{localStorage.getItem("username")}</p>

            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : hasHiddenAuthButtons ? (
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
            onClick={(e) => history.push("/")}
          >
            Back to explore
          </Button>
        ) : (
          <>
            <Button onClick={(e) => history.push("/login")}>Login</Button>

            <Button
              variant="contained"
              onClick={(e) => history.push("/register")}
            >
              Register
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
