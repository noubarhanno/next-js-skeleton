import { Box, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../../config";
import { TFooterProps } from "./footer.interface";

const Footer: React.FC<TFooterProps> = ({ children }) => {
  return (
    <Box
      component="footer"
      sx={{ maxWidth: 1300, width: "100%", margin: "auto" }}
    >
      <Box p={2}>
        <Typography variant="body1">{`© Copyright - ${companyName} 2022`}</Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Footer;
