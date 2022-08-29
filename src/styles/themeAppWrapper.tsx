import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useConfigContext } from "context/config.context";
import React from "react";
import CustomGlobalStyles from "./globalStyles";
import configureTheme from "./theme";

const ThemeAppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state } = useConfigContext();
  const theme = configureTheme({
    mode: state.themeMode,
    direction: state.direction,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomGlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeAppWrapper;
