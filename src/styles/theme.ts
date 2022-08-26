import { createTheme, getContrastRatio, Theme } from "@mui/material/styles";
import { EDirection, EThemeMode } from "../interfaces";

export type TConfigureThemeParams = {
  mode?: EThemeMode;
  direction?: EDirection;
};
const configureTheme: (options?: TConfigureThemeParams) => Theme = (
  options
) => {
  const { mode = "light", direction = "ltr" } = options || {};
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
      contrastThreshold: 3,
      mode,
    },
  });
};

export default configureTheme;
