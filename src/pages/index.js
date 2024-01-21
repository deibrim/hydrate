import { useEffect, useState } from 'react';
// hooks
import useResponsive from '../hooks/useResponsive';
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
  const isDesktop = useResponsive('up', 'md');
  useEffect(() => {
    window.onscroll = () => {
      setOffSetTop(isDesktop ? window.pageYOffset * 0.23 : window.pageYOffset * 0.13);
    };
    return () => {
      window.onscroll = null;
    };
  }, [offsetTop, isDesktop]);

  return (
    <Page title="Home">
      <HomeHero offsetTop={offsetTop} />
      <HomeLookingFor />
    </Page>
  );
}
