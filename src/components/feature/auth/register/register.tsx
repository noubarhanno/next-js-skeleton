import React from "react";
import { Box, Button, TextField } from "@mui/material";
import RegisterLayout from "./register.layout";

const Register: React.FC = () => {
  return (
    <RegisterLayout>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ mt: 2, minWidth: ["auto", 400] }}
        >
          <TextField
            label="First name"
            name="firstName"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <TextField
            label="Last name"
            name="lastName"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <TextField
            label="Institution"
            name="instituation"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <TextField
            label="Work email"
            name="workEmail"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <TextField
            label="Phone number"
            name="phonNumber"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <Button variant="contained" fullWidth>
            Request a demo
          </Button>
        </Box>
      </form>
    </RegisterLayout>
  );
};

export default Register;
