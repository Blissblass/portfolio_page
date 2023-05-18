import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import dynamic from "next/dynamic";
import ModelLoader from "../model-loader";

const LazyModelLoader = dynamic(() => import("../model"), {
  ssr: false,
  loading: () => <ModelLoader />,
});

const Home = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="All about Eray Alkış; I'm a full-stack developer based in Turkey! Get to know me as I showcase my projects, skills, and more!"
        />

        <meta name="author" content="Eray Alkış" />
        <link rel="apple-touch-icon" href="ea.svg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Eray Alkış" />
        <meta
          property="og:description"
          content="All about Eray Alkış; I'm a full-stack developer based in Turkey! Get to know me as I showcase my projects, skills, and more!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://erayalkis.onrender.com/images/ea.svg"
        />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <title>Eray Alkış | Home</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyModelLoader />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
