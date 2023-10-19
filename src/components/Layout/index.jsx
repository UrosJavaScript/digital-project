import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
// component
import Navigation from '../Navigation';

const Layout = ({ darkTheme, toggleIcon, toggleTheme }) => {
  return (
    <>
      <Navigation
        darkTheme={darkTheme}
        toggleIcon={toggleIcon}
        toggleTheme={toggleTheme}
      />
      <Outlet />
    </>
  );
};
Layout.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleIcon: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
export default Layout;
