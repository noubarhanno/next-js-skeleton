import type { NextPage } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Login } from "components/feature/auth/login";
import { AuthHeader } from "layout/header";
import { EConfigContextAction, useConfigContext } from "context/config.context";
import { EThemeMode } from "interfaces";
import { Footer } from "layout/footer";

const LoginPage: NextPage = () => {
  const { dispatch, state } = useConfigContext();

  const onChangeThemeMode = (theme: EThemeMode) => {
    dispatch({
      type: EConfigContextAction.SET_THEME_MODE,
      payload: theme,
    });
  };

  return (
    <Box height="100%">
      <Head>
        <title>Secfinity - Login</title>
        <meta name="description" content="Login Page Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{
            background:
              "linear-gradient(310deg, rgba(20, 23, 39, 0.6), rgba(58, 65, 111, 0.6)) center center / cover no-repeat, url(/images/login-background.jpg) transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "15px",
            opacity: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          minHeight={["auto", 500]}
          margin={2}
          boxShadow={3}
        >
          <AuthHeader
            onChangeThemeMode={onChangeThemeMode}
            themeMode={state.themeMode}
          />
          <Typography variant="h3" color="white" mt={5}>
            Welcome back
          </Typography>
          <Typography variant="body1" color="white" m={1}>
            Unlocking the full potential of your securities Portfolio
          </Typography>
        </Box>
        <Box display="flex" sx={{ transform: "translateY(-50%)" }}>
          <Login />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default LoginPage;
