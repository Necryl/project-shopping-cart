import styled from "styled-components";
import CartItem from "../CartItem";
import PropTypes from "prop-types";

const ItemContainer = styled.div`
  display: grid;
  gap: 1em;
  max-width: 500px;
`;

function Cart({ cartData, setCart }) {
  console.log("cart", cartData);
  return (
    <div id="Cart">
      <h4>This is the Cart component</h4>
      <ItemContainer>
        {Object.keys(cartData).map((key, index) => {
          const data = cartData[key];
          return (
            <CartItem
              key={index}
              itemName={data.title}
              imgSrc={data.image}
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
