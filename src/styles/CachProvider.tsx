import { CacheProvider as MuiCacheProvider } from "@emotion/react";
import createEmotionCache from "./emotionCache";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

type TCacheProviderProps = {
  children: React.ReactNode;
  locale?: "en" | "ar";
};
const CacheProvider: React.FC<TCacheProviderProps> = ({ children, locale }) => {
  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  return (
    <StylesProvider jss={jss}>
      <MuiCacheProvider value={createEmotionCache(locale)}>
        {children}
      </MuiCacheProvider>
    </StylesProvider>
  );
};

export default CacheProvider;
