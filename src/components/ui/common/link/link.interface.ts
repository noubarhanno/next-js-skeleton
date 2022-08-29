import { SxProps, Theme } from "@mui/material";
import { EThemeMode } from "interfaces";
import React from "react";

export type LinkProps = {
  children?: React.ReactNode;
  href: string;
  margin?: string | number;
  padding?: string | number;
  themeMode?: EThemeMode;
};
