import React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import logo from "../assets/logo.svg";

const Login = (props) => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: "8rem" }}>
      <Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} />
        </Box>
        <Box marginTop="2rem">
          <p>Please fill in your unique admin login details below</p>
        </Box>
        <Box>
          <Stack>
            <label htmlFor="email">Email</label>
            <TextField id="email" variant="filled" />
          </Stack>
        </Box>
        <Box mt="1rem">
          <Stack>
            <label htmlFor="password">Password</label>
            <TextField id="password" variant="filled" />
          </Stack>
        </Box>
        <Box mt="1rem">
          <Stack>
            <Button variant="contained" color="black">
              Sign In
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

Login.propTypes = {};

export default Login;