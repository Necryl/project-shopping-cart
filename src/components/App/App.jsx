import "./App.css";
import Products from "/src/components/Products/Products.jsx";
import Cart from "/src/components/Cart/Cart.jsx";

import PropTypes from "prop-types";

function App({ dataPage }) {
  return (
    <div id="App">
      <header>
        <h1>Project: Shopping Cart</h1>
      </header>
      <nav>
        {["Shop", "Cart"].map((name, index) => (
          <a
            key={index}
            className={
              dataPage === name.toLowerCase() ||
              (dataPage === "home" && name !== "Cart")
                ? "selected"
                : ""
            }
            href={name === "Cart" ? "/cart" : "/"}
          >
            {name}
          </a>
        ))}
      </nav>
      <main>
        <h2>{dataPage}</h2>
        {dataPage === "home" ? <Products /> : <Cart />}
      </main>
    </div>
  );
}

App.propTypes = {
  dataPage: PropTypes.string,
};

export default App;
