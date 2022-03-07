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
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Add user</h5>
            </div>
            <div class="card-body">
              <form
                role="form text-left"
                method="POST"
                action=""
                onSubmit={handleSubmit}
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="email-addon"
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleName}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="email-addon"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleEmail}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handlePassword}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Repeated password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                    name="repeated_password"
                    id="repeated_password"
                    value={values.repeated_password}
                    onChange={handleRepeatedPassword}
                  />
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn bg-gradient-dark w-100 my-4 mb-2"
                  >
                    Add user
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="auth_form_element">
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
        </div> */}
    </div>
  );
};

export default Adduser;
