import React from "react";
import "./index.css";

function Cards(props) {
  return (
    <>
      <div className="container">
        <div className="forimg">
          <img className="image1" src={props.imgSrc} alt="image" />
        </div>
        <div className="forprice">
          <div className="inner">
            <h4>{props.name}</h4>
            <h4 className="price">${props.price}</h4>
          </div>
          <p className="description">{props.disc}</p>
        </div>
      </div>
    </>
  );
}
export default Cards;
