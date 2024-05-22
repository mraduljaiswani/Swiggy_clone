import { useEffect, useState } from "react";
import { MENU_API, corsProxyUrl } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(corsProxyUrl + MENU_API + resId);
    const json = await data.json();
    setresInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
