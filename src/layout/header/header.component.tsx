import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useCallback } from "react";
import { THeaderProps } from "./header.interface";

const Header: React.FC<THeaderProps> = ({
  children,
  onChangeThemeMode,
  themeMode,
}) => {
  const changeSwitchThemeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => {
      if (onChangeThemeMode) {
        onChangeThemeMode(checked ? "dark" : "light");
      }
    },
    []
  );
  return (
    <Box component="header" minWidth={200}>
      <FormControlLabel
        control={<Switch onChange={changeSwitchThemeHandler} />}
        label={themeMode === "dark" ? "Dark Mode" : "Light Mode"}
      />
      {children}
    </Box>
  );
};

export default Header;
