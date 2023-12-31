import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addItemCartHandler = (amtValue) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      qauntity: amtValue,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addItemCartHandler}></MealItemForm>
      </div>
    </li>
  );
};
export default MealItem;
