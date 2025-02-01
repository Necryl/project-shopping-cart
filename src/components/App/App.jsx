import "./App.css";
import Products from "/src/components/Products/Products.jsx";
import Cart from "/src/components/Cart/Cart.jsx";
import NavItem from "/src/components/NavItem/NavItem.jsx";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 1em;
`;

function AppElem({ dataPage, className }) {
  const AppDiv = styled("div")`
    * {
      box-sizing: border-box;
    }
  `;
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
        {dataPage === "home" ? <Products /> : <Cart />}
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
