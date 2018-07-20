import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserRegistrationForm from "./components/UserRegistrationForm";
import RegistrationForm from "./components/RegistrationForm";

class App extends Component {
  render() {
    return (
      <div>
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
