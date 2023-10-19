import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// component
import Layout from './components/Layout';
import Home from './components/Navigation/Home';
import About from './components/Navigation/About';
import Contact from './components/Navigation/Contact';
import NotFound from './components/NotFound';
// icon
import ToggleIconOff from './assets/images/toggle_off.png';
import ToggleIconOn from './assets/images/toggle_on.png';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(ToggleIconOff);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    setToggleIcon(darkTheme ? ToggleIconOff : ToggleIconOn);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                darkTheme={darkTheme}
                toggleIcon={toggleIcon}
                toggleTheme={toggleTheme}
              />
            }
          >
            <Route index element={<Home darkTheme={darkTheme} />} />
            <Route path="/about" element={<About darkTheme={darkTheme} />} />
            <Route
              path="/contact"
              element={<Contact darkTheme={darkTheme} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
