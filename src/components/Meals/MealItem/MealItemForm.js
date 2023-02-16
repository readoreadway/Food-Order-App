import React, { useRef, useState } from "react";
import Input from "../../Utils/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum > 5 ||
      enteredAmountNum < 1
    ) {
      setFormIsValid(false)
      return;
    }

    props.onAddtoCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          type: "number",
          id: `amount_${props.id}`,
          defaultValue: "1",
          step: "1",
          min: "1",
          max: "5",
        }}
      />
      <button> + Add </button>
      {!formIsValid && <p>Kindly enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
