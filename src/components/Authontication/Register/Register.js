import React, { useState } from "react";
import register from "../../../services/AuthService";
import readingTime from "../../../assest/img/reading_time.svg";
import emailIcon from "../../../assest/icon/mail.svg";
import userIcon from "../../../assest/icon/user.svg";
import keyIcon from "../../../assest/icon/key.svg";
import logoIcon from "../../../assest/img/logo.svg";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    gender: "",
    role: "",
    password: "",
    repeated_password: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleName = (e) => {
    setValues({ ...values, username: e.target.value });
  };

  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleRole = (e) => {
    setValues({ ...values, role: e.target.value });
  };

  const handleGender = (e) => {
    setValues({ ...values, gender: e.target.value });
  };

  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleRepeatedPassword = (e) => {
    setValues({ ...values, repeated_password: e.target.value });
  };

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const handleSubmit = (e) => {
    let errors = {};
    e.preventDefault();
    if (
      values.username &&
      values.email &&
      values.password &&
      values.repeated_password
    ) {
      register(
        values.username,
        values.email,
        values.gender,
        values.role,
        values.password,
        values.repeated_password
      ).then((response) => {
        console.log(response.data);
        if (response.data.errorsObject) {
          errors = {
            username: response.data.errorsObject.username,
            email: response.data.errorsObject.email,
            gender: response.data.errorsObject.gender,
            role: response.data.errorsObject.role,
            password: response.data.errorsObject.password,
            repeated_password: response.data.errorsObject.repeated_password,
          };
          handleErrors(errors);
          setValid(true);
          values.username = "";
          values.email = "";
          values.gender = "";
          values.role = "";
          values.password = "";
          values.repeated_password = "";
        }
      });
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {/* start register component */}
      <div className="auth_register panel_on">
        <div className="auth_register_right">
          <div className="auth_register_logo">
            <div className="auth_register_icon">
              <img src={logoIcon} alt="" />
            </div>
            <p>Booking Star</p>
          </div>
          <div className="auth_illustration">
            <img src={readingTime} alt="" />
          </div>
          <div className="auth_right_bot">
            <p>You already have an account ?</p>
            <button id="to_login">Login now</button>
          </div>
        </div>
        <div className="auth_register_left">
          <div className="auth_register_left_intro">
            <p>Create an account!</p>
          </div>
          {/* <p>
            {errors.username
              ? console.log(errors.usernameError)
              : console.log("not error here")}
          </p> */}
          <form
            className="auth_register_form"
            method="POST"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={userIcon} alt="" />
              </div>
              <input
                value={values.username}
                onChange={handleName}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={emailIcon} alt="" />
              </div>
              <input
                value={values.email}
                onChange={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={keyIcon} alt="" />
              </div>
              <input
                value={values.password}
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={keyIcon} alt="" />
              </div>
              <input
                value={values.repeated_password}
                onChange={handleRepeatedPassword}
                type="password"
                name="repeat_password"
                id="repeat_password"
                placeholder="Repeat Password"
              />
            </div>
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={userIcon} alt="" />
              </div>
              <select name="gender" id="gender" onChange={handleGender}>
                <option selected disabled>
                  Choose a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="auth_form_element">
              <div className="icon_container">
                <img src={userIcon} alt="" />
              </div>
              <select name="role" id="role" onChange={handleRole}>
                <option selected disabled>
                  Choose a role
                </option>
                <option value="customer">Customer</option>
                <option value="owner">Owner</option>
              </select>
            </div>
            <button type="submit">Create account</button>
          </form>
        </div>
      </div>
      {/* end register component */}
    </div>
  );
};

export default Register;
