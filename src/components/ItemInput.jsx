import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const BtnContainer = styled.div`
  display: flex;
  button {
    scale: 80%;
    padding: 0em 1em;
  }
  button:hover {
    background: green;
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 5ch repeat(2, 2.5ch);
  padding: 0.5em;
  height: 5ch;
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
`;

const ItemInput = ({ btnFunc, btnText }) => {
  const [count, setCount] = useState(1);

  const handleCount = (setNum) => {
    const result = setNum < 0 ? 0 : Math.floor(setNum);
    if (count !== result) {
      setCount(String(result));
    }
  };
  return (
    <BtnContainer>
      <InputBox className="input-container">
        <input
          type="number"
          value={count}
          onChange={(e) => {
            handleCount(e.target.value);
          }}
        />
        <input
          type="button"
          value="^"
          onClick={() => {
            handleCount(Number(count) + 1);
          }}
        />
        <input
          type="button"
          value="v"
          onClick={() => {
            handleCount(Number(count) - 1);
          }}
        />
      </InputBox>
      <button
        onClick={() => {
          btnFunc(Number(count));
          setCount(1);
        }}
      >
        {btnText}
      </button>
    </BtnContainer>
  );
};

ItemInput.propTypes = {
  btnFunc: PropTypes.func,
  btnText: PropTypes.string,
};

export default ItemInput;
