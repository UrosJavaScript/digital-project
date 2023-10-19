import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ListUser } from '../../ListUser';
import { SectionHome } from '../../SectionHome';

const Home = ({ darkTheme }) => {
  const containerClassName = useMemo(() => {
    return `w-full h-full text-colorText ${
      darkTheme ? 'bg-darkTheme-bgColor' : 'bg-transparent'
    }`;
  }, [darkTheme]);

  const textClassName = useMemo(() => {
    return `${
      darkTheme ? 'text-colorText' : 'text-primaryColor'
    } font-medium tracking-widest mt-4`;
  }, [darkTheme]);

  return (
    <div className={containerClassName}>
      <div className="wrapper py-6">
        <SectionHome darkTheme={darkTheme} />

        <p className={textClassName}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          repellendus, beatae fugiat atque quod eum voluptate perspiciatis minus
          similique tempore alias, voluptas, nesciunt dolorem. Error aut iste
          quisquam ab quibusdam.
        </p>

        <div className="my-10">
          <ListUser darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
export default Home;
