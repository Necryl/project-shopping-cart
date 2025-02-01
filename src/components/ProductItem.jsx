import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1em;
  img {
    width: 100px;
  }
`;

const ProductItem = ({ itemName, imgSrc }) => {
  return (
    <StyledDiv>
      <img src={imgSrc} alt={"image of " + itemName} />
      <h4>{itemName}</h4>
    </StyledDiv>
  );
};

ProductItem.propTypes = {
  itemName: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ProductItem;
