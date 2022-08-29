import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const RegisterLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 2, p: 2, margin: "auto" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="secondary.main"
          mt={4}
          mb={2}
        >
          Request a demo
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          color="text.secondary"
          mb={2}
        >
          Register to have a demo of our platform
        </Typography>
      </Box>
      {children}
      {/* divider */}
      <Box display="flex" width="100%" alignItems="center" my={3}>
        <Box width="80%" border="1px solid #e9ecef" height="1px" />
        <Box
          px={2}
          py="5px"
          borderRadius={15}
          border="1px solid #e9ecef"
          mx={2}
          width="100%"
        >
          Already registered?
        </Box>
        <Box width="80%" border="1px solid #e9ecef" height="1px" />
      </Box>
      <Link href="/auth/login">
        <Button color="primary" variant="outlined" fullWidth>
          Login
        </Button>
      </Link>
    </Paper>
  );
};

export default RegisterLayout;
