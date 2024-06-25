import { useState } from 'react';
import {
  ACC_LOGO,
  CART_LOGO,
  INFO_LOGO,
  LOGO_URL,
  CONTACT_LOGO,
  HOME_LOGO,
} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus(true);

  // if no dependancy array useEffect will be called on every render
  // if dependency array is empty = [] => useEffect is only called once on initial render(just once)
  // if dependency array is present then useEffect is called every time dependency is called
  // useEffect(() => {
  //     console.log("use effect called");
  // }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            <Link to="/">
              Home
              <img className="user-logo" src={HOME_LOGO} />
            </Link>
          </li>
          <li>
            <Link to="/">
              Account
              <img className="user-logo" src={ACC_LOGO} />
            </Link>
          </li>
          <li>
            <Link to="/">
              Cart
              <img className="user-logo" src={CART_LOGO} />
            </Link>
          </li>

          <li>
            <Link to="/about">
              Info
              <img className="user-logo" src={INFO_LOGO} />
            </Link>
          </li>

          <li>
            <Link to="/contact">
              Contact
              <img className="user-logo" src={CONTACT_LOGO} />
            </Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === 'Login' ? setBtnName('LogOut') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
  s;
};

export default Header;
