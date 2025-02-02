import styled from "styled-components";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";

const ProductContainer = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  > * {
    // background-color: white;
  }
`;

function Products({ data, setCart }) {
  return (
    <div id="Products">
      <h4>This is the Products component</h4>
      <ProductContainer>
        {data.map((pData, index) => (
          <ProductItem
            key={index}
            itemName={pData.title}
            imgSrc={pData.image}
            btnFunc={() => {
              console.log("setting cart", pData);
              setCart((prev) => [...prev, pData]);
            }}
          />
        ))}
      </ProductContainer>
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.array,
  setCart: PropTypes.func,
};

export default Products;
