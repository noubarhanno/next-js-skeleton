import { useEffect, useMemo, useState } from "react";
import configureTheme from "../src/styles/theme";
import type { AppContext, AppProps } from "next/app";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "../src/layout/header";
import { Footer } from "../src/layout/footer";
import CustomGlobalStyles from "../src/styles/globalStyles";
import CacheProvider from "../src/styles/CachProvider";
import { ELocales, EDirection, EThemeMode } from "../src/interfaces";

type TAppExtendedProps = {
  appConfig: TAppConfigProps;
};
export type TAppConfigProps = {
  initLocale: ELocales;
  initDirection: EDirection;
  initTheme: EThemeMode;
};
const App = ({
  Component,
  pageProps,
  appConfig,
}: AppProps & TAppExtendedProps) => {
  const { initDirection, initLocale, initTheme } = useMemo(
    () => appConfig,
    [appConfig]
  );
  // Applicaiton theme mode controller
  const [themeMode, setThemeMode] = useState<EThemeMode>(initTheme);
  const [direction, setDirection] = useState<EDirection>(initDirection);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      (jssStyles.parentElement as any).removeChild(jssStyles);
    }
  }, []);

  const theme = useMemo(
    () => configureTheme({ mode: themeMode, direction }),
    [themeMode, direction]
  );
  /**
   * @description - Change the application theme mode.
   */
  const onChangeThemeMode = (themeMode: EThemeMode) => {
    setThemeMode(themeMode);
  };

  return (
    <CacheProvider locale={initLocale}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomGlobalStyles />
        <Header onChangeThemeMode={onChangeThemeMode} themeMode={themeMode} />
        <Box component="main" height="100%">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const { locale } = ctx;
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom props for layout
    },
    appConfig: {
      initLocale: locale,
      initDirection: locale === "ar" ? "rtl" : "ltr",
      initTheme: "light",
    },
  };
};

export default App;
