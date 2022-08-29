import { Box } from "@mui/material";
import React, { useMemo } from "react";
import {
  useConfigContext,
  EConfigContextAction,
} from "../../context/config.context";
import { EThemeMode } from "../../interfaces";
import { Footer } from "../footer";
import { LandingHeader as Header } from "../header";
import { TPageContainerProps } from "./SitePageLayout.interface";

const PageContainer: React.FC<TPageContainerProps> = ({ children }) => {
  const { dispatch, state } = useConfigContext();

  const { themeMode } = useMemo(() => state, [state]);

  const onChangeThemeMode = (theme: EThemeMode) => {
    dispatch({
      type: EConfigContextAction.SET_THEME_MODE,
      payload: theme,
    });
  };

  return (
    <>
      <Header onChangeThemeMode={onChangeThemeMode} themeMode={themeMode} />
      <Box component="div" height="100%" p={2}>
        <Box maxWidth={1300} component="div" margin="auto">
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PageContainer;
