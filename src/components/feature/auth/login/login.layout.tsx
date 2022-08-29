import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginLayout: React.FC<{ children?: React.ReactNode }> = ({
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
          Hi, Welcome Back
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          color="text.secondary"
          mb={2}
        >
          Sign in on the internal platform
        </Typography>
      </Box>
      {children}
      {/* divider */}
      <Box display="flex" alignItems="center" my={3}>
        <Box width="100%" border="1px solid #e9ecef" height="1px" />
        <Box
          px={3}
          py="5px"
          borderRadius={15}
          border="1px solid #e9ecef"
          mx={2}
        >
          Or
        </Box>
        <Box width="100%" border="1px solid #e9ecef" height="1px" />
      </Box>
      <Link href="/auth/register">
        <Button color="primary" variant="outlined" fullWidth>
          Register
        </Button>
      </Link>
    </Paper>
  );
};

export default LoginLayout;
