import "./App.css";
import Products from "/src/components/Products/Products.jsx";
import Cart from "/src/components/Cart/Cart.jsx";
import NavItem from "/src/components/NavItem/NavItem.jsx";
import ProductItem from "../ProductItem";

import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const StyledNav = styled.nav`
  display: flex;
  gap: 1em;
`;

const AppDiv = styled("div")`
  * {
    box-sizing: border-box;
  }
`;
function AppElem({ dataPage, className }) {
  const [data, setData] = useState([]);
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
        {["Shop", "Cart"].map((name, index) => (
          <NavItem
            key={index}
            isActive={
              dataPage === name.toLowerCase() ||
              (dataPage === "home" && name !== "Cart")
                ? true
                : false
            }
            href={name === "Cart" ? "/cart" : "/"}
          >
            {name}
          </NavItem>
        ))}
      </StyledNav>
      <main>
        <h2>{dataPage === "home" ? "Home" : "Cart"}</h2>
        <h3>{dataPage === "home" ? <Products /> : <Cart />}</h3>
        <div id="product-container">
          {console.log("data", data)}
          {data.map((pData, index) => (
            <ProductItem
              key={index}
              itemName={pData.title}
              imgSrc={pData.image}
            />
          ))}
        </div>
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
