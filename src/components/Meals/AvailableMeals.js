import React from "react";
import Card from "../Utils/Card";

import classes from "./AvailableMeals.module.css";
import Meal from "./MealItem/Meal";

const dummyMeals = [
  {
    id: "m1",
    name: "Amala",
    desc: "Global yoruba-made swallow",
    price: 30.45,
  },
  {
    id: "m2",
    name: "Spaghetti",
    desc: "Flour Pasta",
    price: 10.45,
  },
  {
    id: "m3",
    name: "Pounded yam",
    desc: "A yoruba swallow made from yam.",
    price: 40.0,
  },
  {
    id: "m4",
    name: "Tuwo Shinkafa",
    desc: "A hausa brand swallow made from rice.",
    price: 15.2,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {dummyMeals.map((meal) => (
            <Meal
              name={meal.name}
              key={meal.id}
              id={meal.id}
              price={meal.price}
              desc={meal.desc}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
