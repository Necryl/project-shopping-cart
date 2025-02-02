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
  const [cart, setCart] = useState([]);
  console.log("cart", cart);
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
        <Link to="/">
          <NavItem>Shop</NavItem>
        </Link>
        <Link to="/cart">
          <NavItem>Cart</NavItem>
        </Link>
        <p>Items in cart: {cart.length}</p>
        <NavItem> Checkout</NavItem>
      </StyledNav>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Products data={data} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartData={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
    </AppDiv>
  );
}

AppElem.propTypes = {
  dataPage: PropTypes.string,
  className: PropTypes.string,
};

const App = styled(AppElem)`
  display: grid;
  padding: 1em;
`;

export default App;
