import React from "react";
import { Container, TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <h2>Login</h2>
      <TextField label="Username" fullWidth margin="normal" required />
      <TextField label="Password" type="password" fullWidth margin="normal" required />
      <Button variant="contained" color="primary" onClick={() => navigate('/home')}>Login</Button>
    </Container>
  );
};

export default Login;
