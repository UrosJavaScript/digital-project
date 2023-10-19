import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Audio } from 'react-loader-spinner';

import { fetchUserData } from '../../services/api';

export const ListUser = ({ darkTheme }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error loading: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h2
        className={`${
          darkTheme ? 'text-colorText	' : 'text-primaryColor'
        } font-medium tracking-widest mt-4`}
      >
        USERS
      </h2>
      {loading ? (
        <div className="w-full justify-center flex">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          <div className="flex flex-row gap-4 max-md:flex-col">
            {currentUsers.map((user) => (
              <div
                key={user.id}
                className={`${
                  darkTheme ? 'bg-darkTheme-fromLGradient' : 'bg-primaryColor'
                }   flex-1 rounded-lg p-4 shadow-lg mt-4`}
              >
                <div className="flex-col flex items-center gap-2">
                  <span className="font-bold">{user.name}</span>
                  <span>
                    Phone: <span className="font-bold">{user.phone}</span>
                  </span>
                  <span>
                    Website: <span className="font-bold">{user.website}</span>
                  </span>
                  <span>
                    City: <span className="font-bold">{user.address.city}</span>
                  </span>
                  <span>
                    Company:
                    <span className="font-bold">{user.company.name}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <ul
              className={`flex items-center gap-6 mt-12 justify-center ${
                darkTheme ? 'text-colorText	' : 'text-primaryColor'
              }  text-xl font-bold mb-2`}
            >
              {Array(Math.ceil(users.length / usersPerPage))
                .fill()
                .map((_, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-6 mt-12 justify-center ${
                      darkTheme ? 'bg-colorText	' : 'bg-primaryColor'
                    } ${
                      darkTheme ? 'text-primaryColor' : 'text-colorText'
                    }  text-xl font-bold mb-2 rounded-lg p-2`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

ListUser.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};
