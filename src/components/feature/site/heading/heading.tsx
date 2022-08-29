import React from "react";
import { Box, Button, Theme, Typography } from "@mui/material";
import Link from "next/link";

const Heading: React.FC = () => {
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      width="100%"
      mt={8}
      minHeight={500}
    >
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        width="50%"
        mr={3}
        p={1}
      >
        <HeaderSection />
      </Box>
      <Box width="50%" display="flex" justifyContent="center">
        <Box
          display="flex"
          border="1px solid #cecece"
          borderRadius={5}
          bgcolor="inherit"
          width={400}
          height={400}
        />
      </Box>
    </Box>
  );
};

export default Heading;

const HeaderSection = React.forwardRef((props, ref) => {
  return (
    <Box margin="auto" maxWidth={500} ref={ref} {...props}>
      <Typography
        mb={1}
        variant="h4"
        fontWeight={600}
        color="text.secondary"
        sx={(theme: Theme) => ({
          "& span": {
            color: theme.palette.primary.main,
            fontWeight: 600,
          },
        })}
      >
        Unlocking the full potential of your <span>securities Portfolio</span>
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={5} mb={5}>
        We enable our customers to build, scale and digitize their Security
        Lending and Borrowing Business. Access effortlessly new market
        opportunities through our Innovative SaaS platform.
      </Typography>
      <Link href="/auth/register">
        <Button color="primary" variant="contained">
          Request a demo
        </Button>
      </Link>
    </Box>
  );
});
