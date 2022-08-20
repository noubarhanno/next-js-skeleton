import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import {
  useConfigContext,
  EConfigContextAction,
} from "../../context/config.context";
import { EThemeMode } from "../../interfaces";
import CustomGlobalStyles from "../../styles/globalStyles";
import configureTheme from "../../styles/theme";
import { Footer } from "../footer";
import { Header } from "../header";
import { TPageContainerProps } from "./pageContainer.interface";

const PageContainer: React.FC<TPageContainerProps> = ({ children }) => {
  const { dispatch, state } = useConfigContext();

  const { themeMode, direction } = useMemo(() => state, [state]);

  const onChangeThemeMode = (theme: EThemeMode) => {
    dispatch({
      type: EConfigContextAction.SET_THEME_MODE,
      payload: theme,
    });
  };

  const theme = configureTheme({
    mode: themeMode,
    direction,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomGlobalStyles />
      <Header onChangeThemeMode={onChangeThemeMode} themeMode={themeMode} />
      <Box component="main" height="100%">
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default PageContainer;
