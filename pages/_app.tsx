import { useEffect, useMemo } from "react";
import type { AppContext, AppProps } from "next/app";
import CacheProvider from "../src/styles/CachProvider";
import { ELocales, EDirection, EThemeMode } from "../src/interfaces";
import ConfigContextWrapper from "../src/context/config.context";

export type TAppExtendedProps = {
  appConfig: TAppConfigProps;
};
export type TAppConfigProps = {
  defaultLocale: ELocales;
  defaultDirection: EDirection;
  defaultTheme: EThemeMode;
};
const App = ({
  Component,
  pageProps,
  appConfig,
}: AppProps & TAppExtendedProps) => {
  const { ...rest } = useMemo(() => appConfig, [appConfig]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      (jssStyles.parentElement as any).removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider locale={rest.defaultLocale}>
      <ConfigContextWrapper {...rest}>
        <Component {...pageProps} />
      </ConfigContextWrapper>
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
      defaultLocale: locale,
      defaultDirection: locale === "ar" ? "rtl" : "ltr",
      defaultTheme: "light",
    },
  };
};

export default App;
