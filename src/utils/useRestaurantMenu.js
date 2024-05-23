import { useEffect, useState } from "react";
import { MENU_API, corsProxyUrl } from "./constants";
import MENU_MOCK from "../components/mocks/resMenuMock.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(corsProxyUrl + MENU_MOCK + resId);
    // const json = await data.json();
    const json = MENU_MOCK;
    setresInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
