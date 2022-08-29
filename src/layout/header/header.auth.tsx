import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { THeaderProps } from "./header.interface";
import Link from "next/link";
import { DarkMode, LightMode } from "@mui/icons-material";
import CompanyLogo from "icons/companyLogo";
import HeaderNavigation from "./header.navigation";

const Header: React.FC<THeaderProps> = ({ onChangeThemeMode, themeMode }) => {
  const changeSwitchThemeHandler = useCallback(() => {
    if (onChangeThemeMode) {
      onChangeThemeMode(themeMode === "dark" ? "light" : "dark");
    }
  }, [themeMode]);
  return (
    <AppBar
      component="header"
      position="relative"
      color="transparent"
      elevation={0}
      sx={{
        maxWidth: 1300,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px 16px"
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <Link href="/">
            <CompanyLogo mr={5} color="white" />
          </Link>
          <HeaderNavigation themeMode="dark" />
        </Box>
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
