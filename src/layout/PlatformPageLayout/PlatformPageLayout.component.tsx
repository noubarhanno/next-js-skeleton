import { Box } from "@mui/material";
import React from "react";
import { Footer } from "../footer";
import { TPageContainerProps } from "./PlatformPageLayout.interface";

const PageContainer: React.FC<TPageContainerProps> = ({ children }) => {
  return (
    <>
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default PageContainer;
