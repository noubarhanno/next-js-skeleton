import type { NextPage } from "next";
import Head from "next/head";
import { SitePageLayout } from "layout/StiePageLayout";
import { Heading } from "components/feature/site/heading";
import { Features } from "components/feature/site/features";
import { Box } from "@mui/material";
import { Lender } from "components/feature/site/lender";
import { Borrower } from "components/feature/site/borrower";

const Home: NextPage = () => {
  return (
    <SitePageLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mx={7}>
        <Heading />
        <Features />
        <Lender />
        <Borrower />
      </Box>
    </SitePageLayout>
  );
};

export default Home;
