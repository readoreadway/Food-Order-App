import React, { Fragment } from "react";
import MealsImg from "../../images/meals.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodify</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>

      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table of delicious foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
