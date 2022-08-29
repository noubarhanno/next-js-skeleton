import { AppBar, Box, Button, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { THeaderProps } from "./header.interface";
import Link from "next/link";
import { DarkMode, LightMode } from "@mui/icons-material";
import CompanyLogo from "icons/companyLogo";
import { useConfigContext } from "context/config.context";
import HeaderNavigation from "./header.navigation";

const Header: React.FC<THeaderProps> = ({ onChangeThemeMode, themeMode }) => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const { state } = useConfigContext();
  const changeSwitchThemeHandler = useCallback(() => {
    if (onChangeThemeMode) {
      onChangeThemeMode(themeMode === "dark" ? "light" : "dark");
    }
  }, [themeMode]);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <AppBar
      component="header"
      color="transparent"
      position="sticky"
      elevation={0}
      sx={{
        maxWidth: 1300,
        width: "100%",
        margin: "auto",
        "& .header--animated": {
          backgroundColor:
            state.themeMode === "dark"
              ? "rgba(0, 0, 0, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
          position: "sticky",
          transition: "all 0.6s ease-in-out",
          marginTop: 1,
          borderRadius: 2,
          padding: "14px 16px",
          boxShadow: `${
            state.themeMode === "dark" ? "rgb(12, 12, 12)" : "rgb(145 158 171)"
          } -23px 16px 56px -8px`,
          backdropFilter: "blur(4px)",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="10px 16px"
        {...(animateHeader ? { className: "header--animated" } : {})}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <Link href="/">
            <CompanyLogo mr={5} />
          </Link>
          <HeaderNavigation />
        </Box>
        <Box>
          <Link href="/auth/login">
            <Button color="primary" variant="contained" sx={{ mr: 1 }}>
              Login
            </Button>
          </Link>
          <IconButton onClick={changeSwitchThemeHandler}>
            {themeMode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
