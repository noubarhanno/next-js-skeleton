import { Box } from "@mui/material";
import { Link } from "components/ui/common/link";
import { EThemeMode } from "interfaces";
import React from "react";

const HeaderNavigation: React.FC<{ themeMode?: EThemeMode }> = ({
  themeMode,
}) => {
  return (
    <Box display="flex">
      <Link themeMode={themeMode} href="/#features">
        Features
      </Link>
      <Link themeMode={themeMode} href="/#lenders">
        Lenders
      </Link>
      <Link themeMode={themeMode} href="/#borrowers">
        Borrowers
      </Link>
    </Box>
  );
};

export default HeaderNavigation;
