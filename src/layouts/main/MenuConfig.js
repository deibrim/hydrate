// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'About Us',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/about',
  },
  {
    title: 'All Collection',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/collections',
  },
  {
    title: 'Contact Us',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/contact',
  },
];

export default menuConfig;
