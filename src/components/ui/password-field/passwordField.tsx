import React, { useState } from "react";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordField: React.FC<TextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onIconClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: showPassword ? (
          <IconButton size="small" onClick={onIconClick}>
            <Visibility />
          </IconButton>
        ) : (
          <IconButton size="small" onClick={onIconClick}>
            <VisibilityOff />
          </IconButton>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
