import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.section}>
      <h2>Delicious Foods, For You.</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just in time and of course by experienced chef!
      </p>
    </section>
  );
};

export default MealsSummary;
