import { useEffect, useState } from 'react';
// import { useTransform, useScroll, useTime } from 'framer-motion';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { HomeHero, HomeLookingFor } from '../sections/home';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const [offsetTop, setOffSetTop] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffSetTop(window.pageYOffset * 0.23);
    };
    return () => {
      window.onscroll = null;
    };
  }, [offsetTop]);

  return (
    <Page title="Home">
      <HomeHero offsetTop={offsetTop} />
      <HomeLookingFor />
    </Page>
  );
}
