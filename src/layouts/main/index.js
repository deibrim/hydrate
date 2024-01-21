import PropTypes from 'prop-types';
// @mui
import { Box, Stack } from '@mui/material';

//
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MainLayout({ children }) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}
    </Stack>
  );
}
