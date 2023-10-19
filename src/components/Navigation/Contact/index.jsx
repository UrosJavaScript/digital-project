import PropTypes from 'prop-types';
import Forma from '../../Forma';

const Contact = ({ darkTheme }) => {
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
          Please fill out the form
        </h2>

        <p
          className={`${
            darkTheme ? 'text-colorText	' : 'text-primaryColor'
          } font-medium tracking-widest mt-4 mb-12`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          iusto nihil eveniet asperiores, accusamus, inventore aut at
          reprehenderit exercitationem voluptatibus, tempore saepe fuga
          repellendus molestias veritatis? Officia vel quis adipisci! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto
          nihil eveniet asperiores, accusamus, inventore aut at reprehenderit
          exercitationem voluptatibus, tempore saepe fuga repellendus molestias
          veritatis? Officia vel quis adipisci. Tempore saepe fuga repellendus
          molestias veritatis? Officia vel quis adipisci. Tempore saepe fuga
          repellendus molestias veritatis? Officia vel quis adipisci. Tempore
          saepe fuga repellendus molestias veritatis? Officia vel quis adipisci.
          Officia vel quis adipisci! Tempore saepe fuga repellendus molestias
          veritatis? Officia vel quis adipisci. Officia vel quis adipisci!
        </p>

        <div className="flex flex-col-reverse gap-[50px] pb-[70px]">
          <Forma darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Contact;
