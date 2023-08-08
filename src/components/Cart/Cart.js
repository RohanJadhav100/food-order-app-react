import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            price={item.price}
            qauntity={item.qauntity}
            key={item.id}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>Total Amount=</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button className={classes.button}>Order</button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
