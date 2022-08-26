import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import { SitePageLayout } from "layout/StiePageLayout";

const Home: NextPage = () => {
  return (
    <SitePageLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h2" color="primary.main">
        Main Page Content
      </Typography>
    </SitePageLayout>
  );
};

export default Home;
