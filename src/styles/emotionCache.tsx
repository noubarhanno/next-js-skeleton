import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache(locale?: "ar" | "en") {
  return createCache({
    key: locale === "ar" ? "muirtl" : "css",
    stylisPlugins: locale === "ar" ? [prefixer, rtlPlugin] : [],
  });
}
