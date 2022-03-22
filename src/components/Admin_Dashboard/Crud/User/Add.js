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
    if (
      values.username &&
      values.email &&
      values.password &&
      values.repeated_password
    ) {
      createuser(
        values.username,
        values.email,
        values.gender,
        values.role,
        values.password,
        values.repeated_password
      );
      window.location = "/dashboard";
    }

    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4">
              <h5>Add user</h5>
            </div>
            <div className="card-body">
              <form
                role="form text-left"
                method="POST"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="email-addon"
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleName}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="email-addon"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handlePassword}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeated password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                    name="repeated_password"
                    id="repeated_password"
                    value={values.repeated_password}
                    onChange={handleRepeatedPassword}
                  />
                </div>
                <div className="mb-3">
                  <select
                    aria-label="Gender"
                    aria-describedby="gender-addon"
                    name="gender"
                    id="gender"
                    className="form-control text-secondary"
                    onChange={handleGender}
                  >
                    <option selected disabled>
                      Choose a gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    aria-label="Role"
                    aria-describedby="role-addon"
                    name="role"
                    id="role"
                    className="form-control text-secondary"
                    onChange={handleRole}
                  >
                    <option selected disabled>
                      Choose a role
                    </option>
                    <option value="customer">Customer</option>
                    <option value="owner">Owner</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-dark w-100 my-4 mb-2"
                  >
                    Add user
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
