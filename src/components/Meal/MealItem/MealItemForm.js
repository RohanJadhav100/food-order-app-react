import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    let iValue = +amountInputRef.current.value;

    if (iValue > 5 || iValue < 1) {
      setError(true);
    } else {
      setError(false);
      props.onAddCart(iValue);
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {error && <p>invalid</p>}
    </form>
  );
};

export default MealItemForm;
