import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { THeaderProps } from "./header.interface";
import Link from "next/link";
import { DarkMode, LightMode } from "@mui/icons-material";
import CompanyLogo from "icons/companyLogo";

const Header: React.FC<THeaderProps> = ({ onChangeThemeMode, themeMode }) => {
  const changeSwitchThemeHandler = useCallback(() => {
    if (onChangeThemeMode) {
      onChangeThemeMode(themeMode === "dark" ? "light" : "dark");
    }
  }, [themeMode]);
  return (
    <AppBar
      component="header"
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <CompanyLogo color="white" />
        <Box>
          <IconButton onClick={changeSwitchThemeHandler}>
            {themeMode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
