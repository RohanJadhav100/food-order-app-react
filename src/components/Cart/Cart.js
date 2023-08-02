import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const dummyCart = [
  { id: "c1", name: "football", quantity: 22, price: 40 },
  { id: "c2", name: "Hockey", quantity: 32, price: 20 },
];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {dummyCart.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <div>
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
