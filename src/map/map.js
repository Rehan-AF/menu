import React from "react";
import Cards from "../cards/index";
import menu from "../data/index";

export function Lunch({ selectedCategory }) {
  return menu.map(function ncard(val) {
    if (selectedCategory === "all") {
      return (
        <Cards
          imgSrc={val.img}
          name={val.title}
          price={val.price}
          disc={val.desc}
        />
      );
    } else if (selectedCategory === val.category) {
      return (
        <Cards
          imgSrc={val.img}
          name={val.title}
          price={val.price}
          disc={val.desc}
        />
      );
    }
  });
}

export default Lunch;
