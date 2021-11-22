import React from "react";
import menu from "../data";
import "./index.css";

function Button(props) {
  // const { setItem } = props;
  return (
    <>
      <div className="top">
        <h1>Our Menu</h1>

        <div className="underline"></div>
      </div>
      <div className="bt">
        <button
          className="btns active"
          onClick={() => {
            props.setSelectedCategory("all");
          }}
        >
          All
        </button>
        <button
          className="btns"
          onClick={() => {
            props.setSelectedCategory("breakfast");
          }}
        >
          Breakfast{" "}
        </button>
        <button
          className="btns"
          onClick={() => {
            props.setSelectedCategory("lunch");
          }}
        >
          Lunch{" "}
        </button>
        <button
          className="btns"
          onClick={() => {
            props.setSelectedCategory("shakes");
          }}
        >
          Shakes
        </button>
      </div>
    </>
  );
}
export default Button;
