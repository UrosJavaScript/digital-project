import { useState } from 'react';
import PropTypes from 'prop-types';

const Forma = ({ darkTheme }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'username') {
      setUsername(value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    if (!email || !username) {
      setError('Please enter all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 2000);
    } catch (error) {
      console.error('Error occurred during login:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 w-[30%] max-md:w-full">
          <label
            className={`${
              darkTheme ? 'text-colorText' : 'text-primaryColor'
            } 	mb-6 tracking-widest  block text-sm font-bold mb-1`}
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-[30%] max-md:w-full">
          <label
            className={`${
              darkTheme ? 'text-colorText' : 'text-primaryColor'
            } 	mb-6 tracking-widest  block text-sm font-bold mb-1`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <button
          type="submit"
          className="bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring max-md:w-full"
        >
          {loading ? (
            <div
              className={`${
                darkTheme ? 'text-colorText	' : 'text-primaryColor'
              } font-medium tracking-widest`}
            >
              Processing...
            </div>
          ) : (
            'SUBMIT'
          )}
        </button>
      </form>

      {submitted && (
        <div
          className={`${
            darkTheme ? 'text-colorText	' : 'text-primaryColor'
          } font-medium tracking-widest font-black	`}
        >
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </>
  );
};

Forma.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Forma;
