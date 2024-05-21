import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
// const Heading = () => (<h1> Hello </h1>);

// const Title = () => (
//     <h1 className="title">This is component composition</h1>
// );

const AppLayout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      name: "Mradul Jaiswani",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className={`${isChecked === true ? "bg-gray-400" : "bg-gray-200"}`}>
        <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
          <Header isChecked={isChecked} setIsChecked={setIsChecked} />
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>LOADING JI </h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
