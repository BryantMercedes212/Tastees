import { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <body>
        <Nav />
        <Home />
      </body>
    );
  }
}

export default App;
