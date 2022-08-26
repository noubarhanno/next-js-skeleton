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
      <Box height="100%">{children}</Box>
      <Footer />
    </>
  );
};

export default PageContainer;
