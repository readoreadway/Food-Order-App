import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../stores/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx

  const [btnIsBumping, setBtnIsBumping] = useState(false);

  const cartItemsNumber = items.reduce((prevValue, item) => {
    return prevValue + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBumping ? classes.bump : ""}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setBtnIsBumping(true)

    const Timer = setTimeout(()=> {
      setBtnIsBumping(false)
    }, 300)

    return () => {
      clearTimeout(Timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
