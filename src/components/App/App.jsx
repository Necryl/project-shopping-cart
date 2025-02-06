import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "/src/components/Products/Products.jsx";
import Cart from "/src/components/Cart/Cart.jsx";
import NavItem from "/src/components/NavItem/NavItem.jsx";

import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 1em;
  align-items: center;
`;

const AppDiv = styled("div")`
  * {
    box-sizing: border-box;
  }
  p {
    margin: 0%;
    text-align: end;
  }
`;

function AppElem({ className }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <AppDiv className={className}>
      <header>
        <h1>Project: Shopping Cart</h1>
      </header>
      <StyledNav>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
        <p>Items in cart: {Object.keys(cart).length}</p>
        <NavItem>
          Checkout ($
          {Object.values(cart)
            .reduce((sum, item) => sum + item.price * item.count, 0)
            .toFixed(2)}
          )
        </NavItem>
      </StyledNav>
      <main>
        <Routes>
          <Route
            path="/project-shopping-cart/"
            element={<Products data={data} setCart={setCart} />}
          />
          <Route
            path="/project-shopping-cart/cart"
            element={<Cart cartData={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
    </AppDiv>
  );
}

AppElem.propTypes = {
  className: PropTypes.string,
};

const App = styled(AppElem)`
  display: grid;
  padding: 1em;
`;

export default App;
