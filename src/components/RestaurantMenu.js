// import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(null);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   // "catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

  //   console.log(MENU_API + resId);
  //   const json = await data.json();
  //   // console.log(json);
  //   // console.log(
  //   //   json.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //   //     .itemCards
  //   // );
  //   setresInfo(json?.data);
  // };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 p-4 ">{name}</h1>
      <h2>{cuisines} </h2>
      <h2>{costForTwoMessage} </h2>
      <h2>{avgRating} Rating </h2>
      <h2>
        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}> */}
        {/* {item.card.info.name} - {"Rs."} {item.card.info.defaultPrice / 100}{" "} */}
        {/* <img
              className="item-img w-10"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            /> */}
        {/* </li> */}
        {/* ))}{" "} */}
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setshowIndex={() =>
              setshowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </h2>
    </div>
  );
};
export default RestaurantMenu;
