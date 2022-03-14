import React, {useContext, useState} from "react";
import { login } from "../../../services/AuthService";
import jwtDecode from "jwt-decode";
import world from "../../../assest/img/world.svg";
import mail from "../../../assest/icon/mail.svg";
import key from "../../../assest/icon/key.svg";
import R from "../../../assest/img/R.jpg";
import { Link } from "react-router-dom";

const Login = ()=>{

  const [data , setData] = useState({email : "", password : ""});

    const [submitted, setSubmitted] = useState(false);

    const handleEmail = (e) => {
      setData({ ...data, email: e.target.value });
    };


    const handlePassword = (e) => {
      setData({ ...data,password: e.target.value });
    };

    const handleSubmit =()=> {
      login( data.email, data.password).then((response) => {
        // auth.setAuthenticated(true)
        // auth.setRole(jwtDecode(response.data.accessToken).role.name);
        window.location = '/authenticated/'+jwtDecode(response.data.accessToken).role.name
      });
      setSubmitted(true);
    };

 
  
    return (
      <div className="app">
        <div className="auth">
          <div className="auth_background" />
          <img src={R} alt="backgroundimag" className="auth_background" />
          {/* start login component */}
          <div className="auth_login panel_on">
            <div className="auth_login_right">
              <div className="auth_login_logo">
                <div className="auth_logo_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="45.255"
                    height="45.255"
                    viewBox="0 0 45.255 45.255"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2={1}
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#c33764" />
                        <stop offset={1} stopColor="#1d2671" />
                      </linearGradient>
                    </defs>
                    <g
                      id="Rectangle_4"
                      data-name="Rectangle 4"
                      transform="translate(22.627) rotate(45)"
                      stroke="#fff"
                      strokeWidth={1}
                      fill="url(#linear-gradient)"
                    >
                      <rect width={32} height={32} rx={10} stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width={31}
                        height={31}
                        rx="9.5"
                        fill="none"
                      />
                    </g>
                  </svg>
                </div>
                <p>Booking Star</p>
              </div>
              <div className="auth_illustration">
                <img src={world} alt="imgworld" />
              </div>
              <div className="auth_right_bot">
                <p>You don't have an account ?</p>
                <Link to='/auth/register' id="to_register">Create one now</Link>
              </div>
            </div>
            <div className="auth_login_left">
              <div className="auth_login_left_intro">
                <p>Welcome back!</p>
                <p>we hope you have a woderful day !</p>
              </div>
              <form className="auth_login_form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
                <div className="auth_form_element">
                  <div className="icon_container">
                    <img src={mail} alt="mail" />
                  </div>
                  <input
                    type="text"
                    email={data.email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="auth_form_element">
                  <div className="icon_container">
                    <img src={key} alt="key" />
                  </div>
                  <input
                    type="password"
                    password={data.password}
                    onChange={handlePassword}
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Login;
