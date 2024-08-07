import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus(true);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-red-600 shadow-2xl mb-2 px-2">
      <div className="logo-container">
        <img className="w-64" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">
              Home
              {/* <img className="user-logo" src={HOME_LOGO} /> */}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/">
              Account
              {/* <img className="user-logo" src={ACC_LOGO} /> */}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/">
              Cart
              {/* <img className="user-logo" src={CART_LOGO} /> */}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              Info
              {/* <img className="user-logo" src={INFO_LOGO} /> */}
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              Contact
              {/* <img className="user-logo" src={CONTACT_LOGO} /> */}
            </Link>
          </li>
          <li className="px-4">{/* <Link to="/grocery">Grocery</Link> */}</li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === 'Login' ? setBtnName('LogOut') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
  s;
};

export default Header;
