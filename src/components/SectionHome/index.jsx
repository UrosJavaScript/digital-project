import PropTypes from 'prop-types';

export const SectionHome = ({ darkTheme }) => {
  return (
    <>
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div
          className={`${
            darkTheme ? 'bg-darkTheme-fromLGradient' : 'bg-primaryColor'
          }   flex-1 rounded-lg p-4 shadow-lg`}
        >
          <h2
            className={`${
              darkTheme ? 'text-colorText	' : 'text-lightTheme-bgColor'
            }  text-xl font-bold mb-2`}
          >
            Leanne Graham
          </h2>
          <p>
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div
          className={`${
            darkTheme ? 'bg-darkTheme-fromLGradient' : 'bg-primaryColor'
          }   flex-1 rounded-lg p-4 shadow-lg`}
        >
          <h2
            className={`${
              darkTheme ? 'text-colorText	' : 'text-lightTheme-bgColor'
            }  text-xl font-bold mb-2`}
          >
            Clementine Bauch
          </h2>
          <p>
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div
          className={`${
            darkTheme ? 'bg-darkTheme-fromLGradient' : 'bg-primaryColor'
          }   flex-1 rounded-lg p-4 shadow-lg`}
        >
          <h2
            className={`${
              darkTheme ? 'text-colorText	' : 'text-lightTheme-bgColor'
            }  text-xl font-bold mb-2`}
          >
            Patricia Lebsack
          </h2>
          <p>
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

SectionHome.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
