import { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <body>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </body>
    );
  }
}

export default App;
