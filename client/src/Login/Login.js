import React from "react";
import "./Login.css";
import logo from "../img/chatLogo.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <section>
        <div className="content">
          <div className="logo">
            <img src={logo} width="100" height="100" alt="logo" />
          </div>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <label htmlFor="pass">Password</label>
            <br />
            <input
              type="text"
              name="pass"
              id="pass"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br />
            <input type="button" value="Enter" />
            <br />
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
