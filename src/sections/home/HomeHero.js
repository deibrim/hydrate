import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Stack } from '@mui/material';
// components
import { MotionContainer, varFade, varSlide, varZoom } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#032427',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={2} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  // position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    // margin: 'unset',
  },
}));

const BottleCapStyle = styled(m.img)(() => ({
  top: 350,
  position: 'fixed',
  zIndex: 4,
  width: 150,
  marginRight: 5,
}));
const BottleBodyStyle = styled(m.img)(() => ({
  bottom: -80,
  position: 'fixed',
  zIndex: 3,
  width: 230,
}));
const TopHighlightImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  position: 'fixed',
  [theme.breakpoints.up('lg')]: {
    width: 'auto',
  },
}));
const BottomHighlightImgStyle = styled(m.img)(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'fixed',
  [theme.breakpoints.up('lg')]: {
    width: 'auto',
  },
}));

// ----------------------------------------------------------------------
HomeHero.propTypes = {
  offsetTop: PropTypes.number,
};
export default function HomeHero({ offsetTop }) {
  return (
    <MotionContainer>
      <RootStyle>
        <BottleCapStyle
          alt="hero"
          src="/images/bottle_cap.svg"
          variants={varSlide({ durationIn: 2, distance: 200 }).outUp}
          sx={{ top: offsetTop ? 350 + offsetTop : 350 }}
        />
        <BottleBodyStyle
          alt="hero"
          src="/images/bottle.svg"
          variants={varSlide({ durationIn: 2, distance: 200 }).outDown}
          sx={{ bottom: offsetTop ? -80 + offsetTop : -80 }}
        />
        <TopHighlightImgStyle alt="hero" src="/images/top_highlight.svg" variants={varFade().inUp} />
        <BottomHighlightImgStyle alt="hero" src="/images/bottom_highlight.svg" variants={varFade().inUp} />

        <Container>
          <ContentStyle>
            <m.div variants={varZoom({ durationIn: 1 }).in}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                Elevate Hydration, Inspire Living – <br /> Pure Essence in Every Drop
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  .
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varZoom({ durationIn: 1 }).in}>
              <Typography sx={{ color: 'common.white' }}>Hydration Elevated: Sip Excellence with Every Drop</Typography>
            </m.div>

            <m.div variants={varZoom({ durationIn: 1 }).in}>
              <NextLink href={'/'} passHref>
                <Button size="large" variant="contained" sx={{ borderRadius: 100 }}>
                  Shop Now
                </Button>
              </NextLink>
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
}
