import { Box, Typography } from "@mui/material";
import React from "react";
import { companyName } from "../../config";
import { TFooterProps } from "./footer.interface";

const Footer: React.FC<TFooterProps> = ({ children }) => {
  return (
    <Box component="header" minWidth={200}>
      <Typography variant="body1">{`© Copyright - ${companyName} 2022`}</Typography>
      {children}
    </Box>
  );
};

export default Footer;
