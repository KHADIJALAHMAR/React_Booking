import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/css/AppLogin.css";
import Login from "./components/Authontication/Login/Login";
import Register from "./components/Authontication/Register/Register";
import AddUser from "./components/User/AddUser";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/admin/owner/create" component={AddUser}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
