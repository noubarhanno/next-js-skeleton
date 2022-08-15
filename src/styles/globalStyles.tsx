import React from "react";
import { GlobalStyles } from "@mui/material";

const CustomGlobalStyles: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        "& html, body, #__next": {
          height: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
        },
      }}
    />
  );
};

export default CustomGlobalStyles;
