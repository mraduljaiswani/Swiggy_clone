import { React, useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = ({ isChecked, setIsChecked }) => {
  console.log(setIsChecked);
  const [Login_Logout, setLogin_Logout] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // const [isChecked, isChecked] = useState(false);
  // useEffect(() => {
  //   if (isChecked === "dark") {
  //     document.documentElement.classList.add("light");
  //   } else {
  //     document.documentElement.classList.remove("light");
  //   }
  // }, [isChecked]);
  const handleCheckboxChange = () => {
    // setIsChecked(isChecked === "dark" ? "light" : "dark");
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-between shadow-md bg-pink-100">
      <div className="logo-container">
        <Link to="/">
          <img className="w-64" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="flex m-6 p-6">
          <li>
            <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <span className="label flex items-center text-sm font-medium text-black">
                Light
              </span>
              <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                  isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                }`}
              >
                <span
                  className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                    isChecked ? "translate-x-[28px]" : ""
                  }`}
                ></span>
              </span>
              <span className="label flex items-center text-sm font-medium text-black">
                Dark
              </span>
            </label>
          </li>
          <li className="px-4">
            Online Status:{" "}
            {onlineStatus ? (
              <span className="bg-green-600 text-white">ONLINE</span>
            ) : (
              <span className="bg-red-400 text-white">OFFLINE</span>
            )}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contant Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="login px-4"
              onClick={() => {
                Login_Logout === "Login"
                  ? setLogin_Logout("Logout")
                  : setLogin_Logout("Login");
              }}
            >
              {Login_Logout}
            </button>
          </li>

          <li>User :{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
