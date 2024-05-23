import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import resObj from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import React from "react";
import { corsProxyUrl } from "../utils/constants";
import MOCK_DATA from "./mocks/mockResListData.json";

// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  // const arr = useState([]);
  //  const [listOfRestaurants, setlistOfRestaurants] = arr
  // const listOfRestaurants = arr[0];
  // const setlistOfRestaurants = arr[1];
  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
  const { loggedInUser, setuserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1523685&lng=75.84322759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //   );
    //   const json = await data.json();
    //   setlistOfRestaurants(
    //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //   );
    //   setfilteredRestaurant(
    //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //   );
    // };
    // console.log(listOfRestaurants);

    // const fetchData = async () => {
    //   try {
    //     const apiUrl =
    //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1523685&lng=75.84322759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    //     const response = await fetch(corsProxyUrl + apiUrl, {
    //       headers: {
    //         "x-requested-with": "XMLHttpRequest",
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const json = await response.json();
    //     setlistOfRestaurants(
    //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //         ?.restaurants
    //     );
    //     setfilteredRestaurant(
    //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //         ?.restaurants
    //     );
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    const json = MOCK_DATA;
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <input
        className="m-3 border border-solid border-black inline-flex"
        value={searchText}
        data-testid="SearchInput"
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />
      <button
        className="m-4 px-4 py-2 bg-green-200 rounded-lg"
        onClick={() => {
          const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setfilteredRestaurant(filtered);
        }}
      >
        Search
      </button>
      {/* <div className="filter flex"> */}
      <button
        className="filter-btn px-4 py-2 inline-flex bg-blue-200 rounded-lg"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.2
          );
          // setlistOfRestaurants(filteredList);
          setfilteredRestaurant(filteredList);
        }}
      >
        Top rated Restaurants
      </button>
      {/* </div> */}
      <label className="m-4 p-4">UserName:</label>
      <input
        className="border-black p-2 m-2"
        value={loggedInUser}
        onChange={(e) => setuserName(e.target.value)}
      />
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
            {/* <RestaurentCard resData={restaurant}/> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
