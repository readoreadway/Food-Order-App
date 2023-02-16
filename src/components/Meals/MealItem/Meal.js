import React, { useContext } from "react";
import CartContext from "../../../stores/cart-context";

import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";

const Meal = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      amount: amount,
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={classes.description}> {props.desc} </div>
        <div className={classes.price}> {price} </div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddtoCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Meal;
