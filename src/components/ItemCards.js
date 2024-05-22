import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import React from "react";

const ItemCards = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  const CDN_URL_NEW = process.env.REACT_APP_CDN_URL;
  console.log("Old Image URL:", CDN_URL);
  console.log("New CDN URL:", process.env.REACT_APP_CDN_URL);
  console.log(
    "Total Link",
    process.env.REACT_APP_CDN_URL + items[0].card.info.imageId
  );

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="fooditems"
          key={item.card.info.id}
          className=" m-4 p-4 border-b-4 border-gray-400 flex justify-between"
        >
          <div>
            <h1 className="font-bold flex"> {item.card.info.name} </h1>
            <span className="flex">
              {" "}
              Rs.-
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
            </span>
            <p className="text-base flex"> {item.card.info.description} </p>
          </div>
          <div className=" w-3/12">
            <div className="absolute">
              <button
                className="m-auto bg-slate-950 text-white rounded-md p-2 absolute"
                onClick={() => handleClick(item)}
              >
                ADD+
              </button>
            </div>
            {/* <img
              src={
                item.card.info.imageId
                  ? CDN_URL_NEW + item.card.info.imageId
                  : ""
              }
              alt=""
            /> */}

            <img
              src={
                item.card.info.imageId
                  ? `${CDN_URL_NEW}${item.card.info.imageId}`
                  : ""
              }
              alt="res-logo"
              className="rounded-xl"
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;
