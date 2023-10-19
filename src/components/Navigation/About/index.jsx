import PropTypes from 'prop-types';
// style
import './style.css';
// icons
import AboutIcon from '../../../assets/images/about.png';
import AnimateImg from '../../../assets/images/animation-img.png';

const About = ({ darkTheme }) => {
  return (
    <div
      className={`w-full h-full text-colorText  ${
        darkTheme ? 'bg-darkTheme-bgColor	' : 'bg-transparent'
      }`}
    >
      <div className="wrapper py-6">
        <h2
          className={`${
            darkTheme ? 'text-colorText	' : 'text-primaryColor'
          } font-semibold	mb-6 tracking-widest`}
        >
          ABOUT US
        </h2>

        <div className="flex gap-10 flex-row-reverse max-md:flex-col">
          <img src={AboutIcon} alt="about" className="rounded-[20px]" />
          <div className="flex flex-col items-center">
            <img
              src={AnimateImg}
              alt="animate-img"
              className="rounded-[50%] h-[200px] animated-image"
            />
            <p
              className={`${
                darkTheme ? 'text-colorText	' : 'text-primaryColor'
              } font-medium tracking-widest z-20`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              repellendus, beatae fugiat atque quod eum voluptate perspiciatis
              minus similique tempore alias, voluptas, nesciunt dolorem. Error
              aut iste quisquam ab quibusdam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Saepe repellendus, beatae fugiat
              atque quod eum voluptate perspiciatis minus similique tempore
              alias, voluptas, nesciunt dolorem. Error aut iste quisquam ab
              quibusdam.
            </p>
          </div>
        </div>

        <p
          className={`${
            darkTheme ? 'text-colorText	' : 'text-primaryColor'
          } font-medium tracking-widest mt-4`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          repellendus, beatae fugiat atque quod eum voluptate perspiciatis minus
          similique tempore alias, voluptas, nesciunt dolorem. Error aut iste
          quisquam ab quibusdam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe repellendus, beatae fugiat atque quod eum
          voluptate perspiciatis minus similique tempore alias, voluptas,
          nesciunt dolorem. Error aut iste quisquam ab quibusdam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Saepe repellendus, beatae
          fugiat atque quod eum voluptate perspiciatis minus similique tempore
          alias, voluptas, nesciunt dolorem. Error aut iste quisquam ab
          quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe repellendus, beatae fugiat atque quod eum voluptate perspiciatis
          minus similique tempore alias, voluptas, nesciunt dolorem. Error aut
          iste quisquam ab quibusdam.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default About;
