import styled from "styled-components";
import PropTypes from "prop-types";

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
  grid-template-columns: 4ch repeat(2, 2.5ch);
  padding: 0.5em;
  height: 5ch;
  input {
    min-width: 0;
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
  return (
    <BtnContainer>
      <InputBox className="input-container">
        <input type="number" defaultValue="0" />
        <input type="button" value="^" />
        <input type="button" value="v" />
      </InputBox>
      <button
        onClick={() => {
          btnFunc();
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
