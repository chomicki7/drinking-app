import React from "react";
import "./DrinksList.css";
import Drinks from "../Drinks/Drinks";

const DrinksList = (props) => {
  return (
    <div className="container">
      {props.drinks
        ? props.drinks.map((drink) => {
            return <Drinks drink={drink} key={drink.id} />;
          })
        : alert("Try with another word")}
    </div>
  );
};

export default DrinksList;
