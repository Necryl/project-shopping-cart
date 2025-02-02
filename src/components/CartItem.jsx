import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: white;
  border-radius: 1em;
  color: black;
  gap: 1.5em;
  padding: 1em;
  transition: 100ms;
  img {
    width: 100px;
  }
  &:hover {
    scale: 101%;
  }
  button {
    grid-column: span 2;
    justify-self: end;
    transition: 100ms;
  }
  button:hover {
    background-color: red;
  }
`;

const CartItem = ({ itemName, imgSrc, btnFunc }) => {
  return (
    <StyledDiv>
      <img src={imgSrc} alt={itemName} />
      <h4>{itemName}</h4>
      <button onClick={btnFunc}>Remove from Cart</button>
    </StyledDiv>
  );
};

CartItem.propTypes = {
  itemName: PropTypes.string,
  imgSrc: PropTypes.string,
  btnFunc: PropTypes.func,
};

export default CartItem;
