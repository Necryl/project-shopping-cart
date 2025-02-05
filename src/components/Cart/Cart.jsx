import styled from "styled-components";
import CartItem from "../CartItem";
import PropTypes from "prop-types";

const ItemContainer = styled.div`
  display: grid;
  gap: 1em;
  max-width: 500px;
`;

function Cart({ cartData, setCart }) {
  return (
    <div id="Cart">
      <h4>This is the Cart component</h4>
      <ItemContainer>
        {Object.keys(cartData).map((key, index) => {
          const data = cartData[key];
          return (
            <CartItem
              key={index}
              data={data}
              editFunc={(num) => {
                const setNum = num > 0 ? num : 1;
                if (setNum !== data.count) {
                  setCart((prev) => {
                    const result = structuredClone(prev);
                    result[key].count = setNum;
                    return result;
                  });
                }
              }}
              btnFunc={() => {
                setCart((prev) => {
                  const result = { ...prev };
                  delete result[key];
                  return result;
                });
              }}
            />
          );
        })}
      </ItemContainer>
    </div>
  );
}

Cart.propTypes = {
  cartData: PropTypes.object,
  setCart: PropTypes.func,
};

export default Cart;
