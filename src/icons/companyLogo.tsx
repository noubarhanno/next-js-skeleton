import React from "react";
import {
  SvgIcon,
  SvgIconProps,
  Typography,
  TypographyProps,
} from "@mui/material";

const CompanyLogo: React.FC<TypographyProps> = (props) => {
  return (
    // <SvgIcon
    //   // sx - use this to add common style to the icon
    //   // viewBox="add the view box here"
    //   {...props}
    // >
    //   // add your svg content here
    // </SvgIcon>
    <Typography
      sx={{ cursor: "pointer" }}
      {...props}
    >{`[Logo goes here]`}</Typography>
  );
};

export default CompanyLogo;
