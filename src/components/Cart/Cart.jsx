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
        {cartData.map((data, index) => (
          <CartItem
            key={index}
            itemName={data.title}
            imgSrc={data.image}
            btnFunc={() => {
              setCart((prev) => {
                let removed = false;
                return prev.filter((item) => {
                  if (removed === false) {
                    const result = item !== data;
                    if (!result) {
                      removed = true;
                      return result;
                    }
                  }
                  return true;
                });
              });
            }}
          />
        ))}
      </ItemContainer>
    </div>
  );
}

Cart.propTypes = {
  cartData: PropTypes.array,
  setCart: PropTypes.func,
};

export default Cart;
