import React, { useState } from "react";
import createuser from "../../../../services/CreateUser";

const Adduser = () => {
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
    e.preventDefault();
    console.log("hello");
    // if (
    //   values.username &&
    //   values.email &&
    //   values.password &&
    //   values.repeated_password
    // ) {
    //   createuser(
    //     values.username,
    //     values.email,
    //     values.gender,
    //     values.role,
    //     values.password,
    //     values.repeated_password
    //   );
    // }

    setSubmitted(true);
  };

  return (
    <div className="auth">
      {/* <div class="card-header text-center pt-4">
        <h5>Register with</h5>
      </div>
      <div class="card-body">
        <form role="form text-left">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="email-addon"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email-addon"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="password-addon"
            />
          </div>
          <div class="form-check form-check-info text-left">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked=""
            />
            <label class="form-check-label" for="flexCheckDefault">
              I agree the{" "}
              <a href="javascript:;" class="text-dark font-weight-bolder">
                Terms and Conditions
              </a>
            </label>
          </div>
          <div class="text-center">
            <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2">
              Sign up
            </button>
          </div>
          <p class="text-sm mt-3 mb-0">
            Already have an account?{" "}
            <a href="javascript:;" class="text-dark font-weight-bolder">
              Sign in
            </a>
          </p>
        </form>
      </div> */}

      <div className="auth_register panel_on">
        <div className="auth_register_left">
          <form
            className="auth_register_form"
            method="POST"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="auth_form_element">
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
              <select name="gender" id="gender" onChange={handleGender}>
                <option selected disabled>
                  Choose a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="auth_form_element">
              <select name="role" id="role" onChange={handleRole}>
                <option selected disabled>
                  Choose a role
                </option>
                <option value="customer">Customer</option>
                <option value="owner">Owner</option>
              </select>
            </div>
            <button type="submit">Create user</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
