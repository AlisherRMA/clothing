import React from "react";

import "./auth.styles.scss";

import SignIn from "../../components/auth/sign-in/sign-in.component";
import SignUp from "../../components/auth/sign-up/sign-up.component";

const AuthPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthPage;
