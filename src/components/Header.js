import { useState } from "react";
import { ACC_LOGO, CART_LOGO, INFO_LOGO, LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

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
          <li>Account</li>
          <img className="user-logo" src={ACC_LOGO} />
          <li>Cart</li>
          <img className="user-logo" src={CART_LOGO} />
          <li>Info</li>
          <img className="user-logo" src={INFO_LOGO} />
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
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
