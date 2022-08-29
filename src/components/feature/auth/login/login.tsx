import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { LoginProps } from "./login.interface";
import { PasswordField } from "components/ui/password-field";
import LoginLayout from "./login.layout";

const Login: React.FC<LoginProps> = () => {
  return (
    <LoginLayout>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ mt: 2, minWidth: ["auto", 400] }}
        >
          <TextField
            label="Email Address"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <PasswordField
            label="Password"
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ mb: "20px" }}
          />
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </form>
    </LoginLayout>
  );
};

export default Login;
