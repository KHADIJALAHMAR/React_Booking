import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../../../services/UserService";
import { useParams } from "react-router-dom";
import NavBar from "../../../Shared_Elements/NavBar";

const UpdateUser = () => {

  const {id} = useParams();
  const [values, setValues] = useState({
    username: "",
    email: "",
    gender: "",
    role: "",
    password: ""
  });
  const [user , setUser] = useState({});
  const [gender , setGender] = useState('male');
  const [role , setRole] = useState('customer');


  useEffect( () => {
    (async () => {
      await getUserById(id).then((user) => {
        setUser(user)
        setValues({...values, username: user.data.username, email: user.data.email, password: user.data.password})
        if (user.data.role.name === "owner") {
          setRole('owner');
        }
        if (user.data.gender === "female" ) {
          setGender('female');
        }
      });
    })();
  }, []);

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

  const handleErrors = (errors) => {
    setErrors({ ...errors });
  };

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map(key => {
      if (values[key] !== '') {
        res[key] = values[key];
      }
    })
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(getUpdatedValues(values));
    await updateUser(id, getUpdatedValues(values))
    console.log();
    window.location = "/dashboard";
    setSubmitted(true);
  };

  if (user.status !== 200) {
    return (<div>loading...</div>)
  }else {
    return (
      <>
        <NavBar title='Admin Dashboard' dashboard={false}/>
        <div className="container mt-5">
          {console.log(role , gender)}
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Update User</h5>
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
                      <select
                        aria-label="Gender"
                        aria-describedby="gender-addon"
                        name="gender"
                        id="gender"
                        className="form-control text-secondary"
                        onChange={handleGender}
                      >
                        <option value="male" selected={gender === 'male' ? true : false}>Male</option>
                        <option value="female" selected={gender === 'female' ? true : false}>Female</option>
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
                        <option value="customer" selected={role === 'customer' ? true : false} >Customer</option>
                        <option value="owner" selected={role === 'owner' ? true : false} >Owner</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                      >
                        Update User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UpdateUser;
