import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// helpers
import { NAV_LINK } from '../../helper';
// icons
import Logo from '../../assets/images/logo.svg';
import MenuIcon from '../../assets/images/menu.svg';

const Navigation = ({ darkTheme, toggleIcon, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  useEffect(() => {
    setTimeout(() => {
      if (menuOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    }, 500);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`w-full  text-colorText  ${
          darkTheme ? 'bg-darkTheme-bgColor	' : 'bg-primaryColor'
        }     drop-shadow-lg sticky top-0 z-[9999] shadow-lg`}
      >
        <div className="relative">
          <div className="wrapper">
            {/* Desktop devices */}
            <div className="flex items-center gap-8 py-3 max-md:hidden">
              <Link to="/">
                <img src={Logo} alt="logo" className="h-[50px]" />
              </Link>

              <div className="flex w-full gap-10">
                {NAV_LINK?.map((item, key) => {
                  return (
                    <Link
                      key={key}
                      className={`font-semibold transition duration-500  ${
                        darkTheme
                          ? 'hover:text-darkTheme-hoverText'
                          : 'hover:text-lightTheme-hoverText'
                      }`}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Toggle */}
              <div className="flex">
                <button onClick={handleToggleTheme} className="border-0">
                  <img src={toggleIcon} alt="toggle" className="h-12" />
                </button>
              </div>
            </div>

            {/* Mobile devices  */}
            <div className="flex items-center justify-between w-full py-3 md:hidden">
              <Link to="/">
                <img src={Logo} alt="logo" className="h-[30px]" />
                {/* Logo Mobile */}
              </Link>
              <button className="transition duration-300" onClick={toggleMenu}>
                <img src={MenuIcon} alt="menu" className="h-[30px]" />
              </button>

              <div
                id="mobile-menu"
                className={`w-full h-screen absolute top-0 right-0 transition-transform duration-1000 ease-in-out transform bg-gradient-to-r ${
                  darkTheme
                    ? 'from-darkTheme-fromLGradient'
                    : 'from-lightTheme-fromLGradient'
                } ${
                  darkTheme
                    ? 'to-darkTheme-toLGradient'
                    : 'to-lightTheme-toLGradient'
                } py-10 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
              >
                <div
                  id="close-menu"
                  className="fixed text-white -top-5 right-6"
                >
                  <button
                    className="text-right text-secondary text-[70px]"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>
                </div>
                <div className="flex flex-col items-center w-full gap-10 mt-8">
                  {NAV_LINK?.map((item, key) => {
                    return (
                      <Link
                        key={key}
                        className="text-xl font-semibold"
                        to={item.link}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  {/* Icons */}
                  <div className="flex">
                    <button onClick={handleToggleTheme} className="border-0">
                      <img src={toggleIcon} alt="toggle" className="h-12" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
Navigation.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  toggleIcon: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navigation;
