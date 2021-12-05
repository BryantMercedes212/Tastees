import { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
    };
  }

  handleToggle = () => {
    const { isToggle } = this.state;
    this.setState({ isToggle: !isToggle });
  };

  render() {
    return (
      <header>
        <nav>
          <div onClick={this.handleToggle} className="hamburger">
            <div className="line"> </div>
            <div className="line"> </div>
            <div className="line"> </div>
          </div>
          <ul className={this.state.isToggle ? "nav-links-open" : "nav-links"}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
