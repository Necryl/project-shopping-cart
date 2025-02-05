import styled from "styled-components";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";

const ProductContainer = styled.div`
  display: grid;
  max-width: 95vw;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 3em;
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
            price={pData.price}
            btnFunc={(count) => {
              if (count !== 0) {
                setCart((prev) => {
                  const result = structuredClone(prev);
                  if (result[pData.id]) {
                    result[pData.id].count = result[pData.id].count + count;
                  } else {
                    const pDData = { ...pData, count: count };
                    result[Number(pDData.id)] = pDData;
                  }
                  return result;
                });
              }
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
