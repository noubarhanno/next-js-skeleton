import React, { useMemo } from "react";
import { Box, lighten, Theme } from "@mui/material";
import { LinkProps } from "./link.interface";
import NextLink from "next/link";
import { useConfigContext } from "context/config.context";
import { useRouter } from "next/router";

const Link: React.FC<LinkProps> = ({
  children,
  href,
  margin,
  padding,
  themeMode,
}) => {
  const { state } = useConfigContext();
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    return asPath === href;
  }, [asPath]);

  const mode = themeMode || state.themeMode;

  return (
    <Box
      sx={(theme: Theme) => ({
        margin: margin || "0 10px",
        padding: padding || "8px",
        borderRadius: 1,
        bgcolor: isActive
          ? lighten(theme.palette.primary.main, 0.9)
          : "transparent",
        "& a": {
          color: isActive
            ? theme.palette.primary.dark
            : mode === "light"
            ? theme.palette.text.secondary
            : theme.palette.common.white,
          textDecoration: "none",
          fontWeight: 600,
          "&:hover": {
            color:
              mode === "light"
                ? theme.palette.primary.dark
                : theme.palette.primary.light,
            textDecoration: "none",
          },
        },
      })}
    >
      <NextLink href={href}>{children}</NextLink>
    </Box>
  );
};

export default Link;
