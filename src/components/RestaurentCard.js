import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import React from "react";

const RestaurentCard = (props) => {
  const { resData } = props;
  // console.log(resData );
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  // const { loggedInUser } = useContext(UserContext);
  const CDN_URL_NEW = process.env.REACT_APP_CDN_URL || CDN_URL;
  return (
    <div
      data-testid="ResCard"
      className="m-4 p-4 w-[250px] bg-gray-200  border border-black border-solid rounded-xl hover:bg-gray-300"
    >
      {/* <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-xl"
      /> */}

      <img
        src={`${CDN_URL_NEW}${cloudinaryImageId}`}
        alt="res-logo"
        className="rounded-xl"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString}</h5>
      <h5>Rating: {avgRating}</h5>
      {/* <ul>
        <li>User :{loggedInUser}</li>
      </ul> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    // console.log(props.resData.info.aggregatedDiscountInfoV3.header);
    return (
      <div>
        <label className="p-2 m-2 font-extrabold bg-slate-900 text-white inline-flex absolute rounded-lg">
          {props.resData.info.aggregatedDiscountInfoV3.header}{" "}
          {props.resData.info.aggregatedDiscountInfoV3.subHeader &&
            props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
