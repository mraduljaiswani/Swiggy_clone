import React, { useState } from "react";
import ItemCards from "./ItemCards";
const RestaurantCategory = (props) => {
  const handleClick = () => {
    props.setshowIndex();
  };
  return (
    <div className="mx-auto my-4 p-4 w-6/12 bg-gray-300 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer p-2 m-2"
        onClick={handleClick}
      >
        <span>
          {props.data.title}- ({props.data.itemCards.length})
        </span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>
      {props.showItems && <ItemCards items={props.data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
