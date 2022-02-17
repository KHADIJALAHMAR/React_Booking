import React from "react";
import { login } from "../../services/AuthService";
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
    let email = this.state.email;
    let password = this.state.password;

    // login(email,password)
    login(email, password).then(response => {
        console.log("token : ", response.data);
        window.localStorage.setItem('token',response.data.accessToken)
        
    });
    
    //   window.localStorage.setItem("token", data.data.token);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            email={this.state.value}
            onChange={this.handleEmail}
          />
        </label>
        <label>
          Pass:
          <input
            type="text"
            password={this.state.value}
            onChange={this.handlePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

 
    );
  }
}

export default Login;
