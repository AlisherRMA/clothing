import React from "react";
import { NavLink } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>

    <div className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/shop">
        CONTACT
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" to="/signin">
          SIGN IN
        </NavLink>
      )}
    </div>
  </div>
);

export default Header;
