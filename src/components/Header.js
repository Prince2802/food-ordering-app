import { useState } from "react";
import { ACC_LOGO, CART_LOGO, INFO_LOGO, LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

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
                setBtnName("LogOut");
                console.log(btnName)
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
