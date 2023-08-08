import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let oldState = state.items;
    let itemId = action.item.id;
    let position = oldState.findIndex((e) => {
      return e.id == itemId;
    });
    const newAmount =
      state.totalAmount + action.item.qauntity * action.item.price;
    if (position === -1) {
      const updatedItems = [...state.items, action.item];

      return {
        items: updatedItems,
        totalAmount: newAmount,
      };
    } else {
      oldState[position].qauntity =
        oldState[position].qauntity + action.item.qauntity;
      return {
        items: oldState,
        totalAmount: newAmount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
