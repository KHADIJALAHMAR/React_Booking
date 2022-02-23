import React from "react";
import { login } from "../../../services/AuthService";
import world from "../../../assest/img/world.svg";
import mail from "../../../assest/icon/mail.svg";
import key from "../../../assest/icon/key.svg";
import R from "../../../assest/img/R.jpg";

// import ReactDOM  from "react-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { email: "", password: "" }, errors: {} };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  // console.log(handleChange)

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    let email = this.state.emasil;
    let password = this.state.password;

    // login(email,password)
    login(email, password).then((response) => {
      console.log("token : ", response.data);
      window.localStorage.setItem("token", response.data.accessToken);
    });

    //   window.localStorage.setItem("token", data.data.token);
  }

  render() {
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
                <button id="to_register">Create one now</button>
              </div>
            </div>
            <div className="auth_login_left">
              <div className="auth_login_left_intro">
                <p>Welcome back!</p>
                <p>we hope you have a woderful day !</p>
              </div>
              <form className="auth_login_form" onSubmit={this.handleSubmit}>
                <div className="auth_form_element">
                  <div className="icon_container">
                    <img src={mail} alt="mail" />
                  </div>
                  <input
                    type="text"
                    email={this.state.value}
                    onChange={this.handleEmail}
                  />
                </div>
                <div className="auth_form_element">
                  <div className="icon_container">
                    <img src={key} alt="key" />
                  </div>
                  <input
                    type="password"
                    password={this.state.value}
                    onChange={this.handlePassword}
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
}

export default Login;
