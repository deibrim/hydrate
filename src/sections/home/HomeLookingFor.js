import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  backgroundColor: '#2B575B',
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Stack spacing={5} justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }}>
            <m.div variants={varFade().in}>
              <Iconify icon="ph:hand-coins-fill" sx={{ width: 50, height: 50 }} />
              <br />
              <Typography variant="body1" sx={{ mt: 2, mb: 5 }}>
                SUSTAINABLE & BPA FREE
              </Typography>
            </m.div>
            <m.div variants={varFade().in}>
              <Iconify icon="ion:water" sx={{ width: 50, height: 50 }} />
              <br />
              <Typography variant="body1" sx={{ mt: 2, mb: 5 }}>
                LIGHTWEIGHT
              </Typography>
            </m.div>
            <m.div variants={varFade().in}>
              <Iconify icon="fontisto:recycle" sx={{ width: 50, height: 50 }} />
              <br />
              <Typography variant="body1" sx={{ mt: 2, mb: 5 }}>
                LIFETIME WARRANTY
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component={m.div}
            variants={varFade().in}
            sx={{
              mb: { xs: 3, md: 0 },
            }}
          >
            <Image disabledEffect alt="rocket" src="/images/product.png" />
          </Box>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
