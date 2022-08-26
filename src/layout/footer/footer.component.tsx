import { Box, Typography } from "@mui/material";
import { useConfigContext } from "context/config.context";
import React from "react";
import { companyName } from "../../config";
import { TFooterProps } from "./footer.interface";

const Footer: React.FC<TFooterProps> = ({ children }) => {
  const { state } = useConfigContext();
  return (
    <Box component="footer">
      <Box p={2}>
        <Typography variant="body1">{`© Copyright - ${companyName} 2022`}</Typography>
        {children}
      </Box>
    </Box>
  );
};

export default Footer;
