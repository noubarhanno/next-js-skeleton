import React from "react";
import { EThemeMode } from "../../interfaces";

export type THeaderProps = {
  children?: React.ReactNode;
  onChangeThemeMode?: (mode: EThemeMode) => void;
  themeMode?: EThemeMode;
};
