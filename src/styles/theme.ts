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
  let colorStore = {
    primary: {
      light: "#4FA4FD",
      main: "#017DFF",
      dark: "#0161C7",
    },
  };

  return createTheme({
    direction,
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    palette: {
      mode,
      primary: colorStore.primary,
    },
  });
};

export default configureTheme;
