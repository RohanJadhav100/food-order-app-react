import { useState } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li>
      <div className={classes["cart-item"]}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.qauntity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};
export default CartItem;
