import React from "react";
import { Container, TextField, Button } from "@mui/material";

const Signup = () => {
  return (
    <Container>
      <h2>Signup</h2>
      <TextField label="Username" fullWidth margin="normal" required />
      <TextField label="Email" type="email" fullWidth margin="normal" required />
      <TextField label="Password" type="password" fullWidth margin="normal" required />
      <Button variant="contained" color="primary">Signup</Button>
    </Container>
  );
};

export default Signup;
