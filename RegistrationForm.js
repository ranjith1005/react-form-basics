import React, { Component } from "react";
import ReactDOM from "react-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state);
  }

  handleClear() {
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: ""
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter first name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <button onClick={this.handleClear.bind(this)}>Clear</button>
      </div>
    );
  }
}

export default RegistrationForm;
