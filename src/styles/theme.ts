import { createTheme, Theme } from "@mui/material/styles";
import { EDirection, EThemeMode } from "../interfaces";

export type TConfigureThemeParams = {
  mode?: EThemeMode;
  direction?: EDirection;
};
const configureTheme: (options?: TConfigureThemeParams) => Theme = (
  options
) => {
  const { mode = "light", direction = "ltr" } = options || {};
  const colorStore =
    mode === "light"
      ? {
          primary: {
            light: "#9fbafb",
            main: "#325ca8",
            dark: "#002e6a",
          },
          secondary: {
            light: "#ff9aba",
            main: "#ca6a8a",
            dark: "#973c5d",
          },
        }
      : {
          primary: {
            light: "#e1f9ff",
            main: "#aec6ff",
            dark: "#7d96cc",
          },
          secondary: {
            light: "#ffe4fa",
            main: "#ffb1c7",
            dark: "#cb8196",
          },
        };
  return createTheme({
    direction,
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
      },
    },
    palette: {
      ...colorStore,
      mode,
    },
  });
};

export default configureTheme;
