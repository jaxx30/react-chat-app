import React from "react";
// import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import Join from "./Join/Join";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onsubmit: "",
    };
  }

  onsubmit = (message) => {};

  render() {
    return (
      // <Login />
      <Router>
        <Route path="/" exact component={Join}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Router>
    );
  }
}

export default App;
