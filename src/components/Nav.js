import { Component } from "react";
import "./Nav.css";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./ProductDisplay";
import productData from "../data/data";
import ProductDisplay from "./ProductDisplay";

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
    const products = productData.map((product) => {
      return (
        <ProductDisplay
          key={product.id}
          product={product}
          handleProductClick={this.handleProductClick}
        />
      );
    });

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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="#">Projects</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/products" element={products} />
        </Routes>
      </header>
    );
  }
}

export default Nav;
