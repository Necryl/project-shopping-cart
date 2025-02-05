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
    grid-row: span 4;
  }
  &:hover {
    scale: 101%;
  }
  button {
    justify-self: end;
    transition: 100ms;
  }
  button:hover {
    background-color: red;
  }
  h5 {
    margin: 0;
    font-size: 1em;
  }
  h4 {
    margin: 0;
  }
  p {
    padding-right: 1ch;
  }
  .inputBox {
    display: grid;
    grid-template-columns: auto 5ch repeat(2, 2.5ch) auto;
    padding: 0.5em;
    height: 5ch;
    align-items: center;
    input {
      min-width: 3ch;
      text-align: center;
      padding: 0em;
    }
    /* For Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* For Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;

const CartItem = ({ data, editFunc, btnFunc }) => {
  return (
    <StyledDiv>
      <img src={data.image} alt={data.title} />
      <h4>{data.title}</h4>
      <h5>
        Price: $ {data.price} ($ {(data.price * data.count).toFixed(2)})
      </h5>
      <div className="inputBox">
        <p>Count: </p>
        <input
          type="number"
          value={data.count}
          onChange={(e) => editFunc(Number(e.target.value))}
        />
        <input
          type="button"
          value="^"
          onClick={() => editFunc(Number(data.count + 1))}
        />
        <input
          type="button"
          value="v"
          onClick={() => editFunc(Number(data.count - 1))}
        />
        <button onClick={btnFunc}>Remove from Cart</button>
      </div>
    </StyledDiv>
  );
};

CartItem.propTypes = {
  data: PropTypes.object,
  btnFunc: PropTypes.func,
  editFunc: PropTypes.func,
};

export default CartItem;
