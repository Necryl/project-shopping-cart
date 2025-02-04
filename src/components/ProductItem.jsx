import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1em;
  border-radius: 1em;
  background-color: white;
  position: relative;
  width: 250px;
  display: grid;
  place-items: center;
  gap: 0.5em;
  transition: 100ms;
  color: black;
  h4 {
    width: 100%;
    font-size: 1rem;
    margin: 0;
  }
  h5 {
    margin: 0;
    justify-self: start;
    font-size: 1em;
  }
  img {
    width: 100px;
  }
  &:hover {
    scale: 102%;
  }
`;

const BtnContainer = styled.div`
  button {
    scale: 80%;
  }
  button:hover {
    background: green;
  }
`;

const ProductItem = ({
  itemName,
  imgSrc,
  btnFunc,
  btnText = "Add to Cart",
  price,
}) => {
  return (
    <StyledDiv>
      <img src={imgSrc} loading="lazy" alt={"image of " + itemName} />
      <h4>{itemName}</h4>
      <h5>$ {price}</h5>
      <BtnContainer>
        <button
          onClick={() => {
            btnFunc();
          }}
        >
          {btnText}
        </button>
      </BtnContainer>
    </StyledDiv>
  );
};

ProductItem.propTypes = {
  itemName: PropTypes.string,
  imgSrc: PropTypes.string,
  btnFunc: PropTypes.func,
  btnText: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
