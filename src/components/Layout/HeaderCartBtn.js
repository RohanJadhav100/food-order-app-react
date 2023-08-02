import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
