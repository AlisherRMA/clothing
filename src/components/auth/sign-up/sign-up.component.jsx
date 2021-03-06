import React from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../../firebase/firebase.utils";
import { signUpStart } from "../../../redux/user/user.actions";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("passwords dont't match");
      return;
    }

    signUpStart({ displayName, email, password });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //   await createUserProfileDocument(user, displayName);
    //   this.setState({ displayName: "", email: "", password: "", confirmPassword: "" });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" label="Display Name" value={displayName} onChange={this.handleChange} required />
          <FormInput type="email" name="email" label="Email" value={email} onChange={this.handleChange} required />
          <FormInput type="password" name="password" label="Password" value={password} onChange={this.handleChange} required />
          <FormInput type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={this.handleChange} required />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => {
    console.log({ credentials });
    return dispatch(signUpStart(credentials));
  },
});

export default connect(null, mapDispatchToProps)(SignUp);
