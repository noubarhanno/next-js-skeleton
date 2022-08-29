import React from "react";
import { GlobalStyles, Theme } from "@mui/material";

const CustomGlobalStyles: React.FC = () => {
  return (
    <GlobalStyles
      styles={(theme: Theme) => ({
        "*": {
          boxSizing: "border-box",
          margin: 0,
        },
        "& html, body, #__next": {
          margin: 0,
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "Roboto, sans-serif",
          fontSize: "14px",
          backgroundColor: theme.palette.background.default,
          "& .MuiButton-root": {
            textTransform: "none",
            padding: "10px 16px",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      })}
    />
  );
};

export default CustomGlobalStyles;
