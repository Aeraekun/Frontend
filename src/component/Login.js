import React, { Component } from "react";
import axios from 'axios';
import "./Login.css";

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  appClick = () => {
    axios
      .post( // Login request
        window.location.href,
        {
          username: this.state.username,
          password: this.state.password,
          email: ' '
        },
        { 'Content-Type': 'application/json', withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === 'login success') {
          window.location.pathname = "/";
        } else {
          console.log('wrong data');
        }
      })
      .catch((err) => alert(err));

  }
  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  register = (e) => {
    window.location.replace("/signup")
  }
  render() {
    const { username, password } = this.state;
    const { appChange, appClick, appKeyPress, register } = this;
    return (
      <div className="container-center-horizontal">
        <div className="desktop-1 screen">
          <h1 className="title">
            Sharpic
          </h1>
          <input type="text" name="username" placeholder="Email Address" value={username} onChange={appChange} className="component border-2px-black email-address valign-text-middle roboto-normal-black-15px" />
          <input type="password" name="password" placeholder="Password" value={password} onChange={appChange} onKeyPress={appKeyPress} className="overlap-group border-2px-black password valign-text-middle roboto-normal-black-15px" />
          <button onClick={register} className="button place valign-text-middle">REGISTER</button>
          <button onClick={appClick} className="button-1 log-in valign-text-middle">LOG IN</button>
        </div>
      </div>
    );
  }
}

export default Login;