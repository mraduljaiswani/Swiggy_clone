// import { render, screen, fireEvent } from "@testing-library/react";
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Header from "../Header";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import UserContext from "../../utils/userContext";
// import "@testing-library/jest-dom";

// describe("Header Component", () => {
//   it("renders header with initial state", () => {
//     // Mock UserContext.Provider value
//     const contextValue = { loggedInUser: "TestUser" };

//     // Render Header component
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           {/* <UserContext.Provider value={contextValue}> */}
//             <Header isChecked={false} setIsChecked={() => {}} />
//           {/* </UserContext.Provider> */}
//         </Provider>
//       </BrowserRouter>
//     );

//     // Check if the logo is rendered
//     const logoElement = screen.getByAltText("Logo");
//     expect(logoElement).toBeInTheDocument();

//     // Check if the dark mode toggle is rendered
//     const darkModeToggle = screen.getByRole("checkbox", { name: /Dark/i });
//     expect(darkModeToggle).toBeInTheDocument();

//     // Check if the login button is rendered
//     const loginButton = screen.getByRole("button", { name: /Login/i });
//     expect(loginButton).toBeInTheDocument();

//     // Check if the user name is rendered
//     const userElement = screen.getByText(/TestUser/i);
//     expect(userElement).toBeInTheDocument();
//   });

//   it("toggles dark mode when dark mode toggle is clicked", () => {
//     // Mock setIsChecked function
//     const setIsChecked = jest.fn();

//     // Render Header component
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <UserContext.Provider value={{ loggedInUser: "TestUser" }}>
//             <Header isChecked={false} setIsChecked={setIsChecked} />
//           </UserContext.Provider>
//         </Provider>
//       </BrowserRouter>
//     );

//     // Find the dark mode toggle checkbox
//     const darkModeToggle = screen.getByRole("checkbox", { name: /Dark/i });

//     // Simulate clicking on the dark mode toggle checkbox
//     fireEvent.click(darkModeToggle);

//     // Check if setIsChecked has been called with the correct value (true)
//     expect(setIsChecked).toHaveBeenCalledWith(true);
//   });
// });

// // import { render, screen } from "@testing-library/react";
// // import React from "react";
// // import { Provider } from "react-redux";
// // import Header from "../Header";
// // import appStore from "../../utils/appStore";
// // import { BrowserRouter } from "react-router-dom";
// // import "@testing-library/jest-dom";

// // it("should load header", () => {
// //   render(
// //     <BrowserRouter>
// //       <Provider store={appStore}>
// //         <Header />
// //       </Provider>
// //     </BrowserRouter>
// //   );

// //   // const loginbutton = screen.getByRole("button", { name: "login" });
// //   // expect(loginbutton).toBeInTheDocument();
// //   const loginButton = screen.getByRole("button");
// //   expect(loginButton).toBeInTheDocument();
// // });




// import React, { act } from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Header from "../Header";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import UserContext from "../../utils/userContext";


// // Mock useOnlineStatus hook
// jest.mock("../../utils/useOnlineStatus", () => jest.fn(() => true));

// // Mock useSelector to return a mock cart state
// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(() => ({
//     cart: {
//       items: [],
//     },
//   })),
// }));

// test("renders Header component and toggles dark mode", async () => {
//   const setIsChecked = jest.fn();
//   await act(async () =>
//     render(
//       <Provider store={appStore}>
//         <UserContext.Provider value={{ loggedInUser: "TestUser" }}>
//           <BrowserRouter>
//             <Header isChecked={false} setIsChecked={setIsChecked} />
//           </BrowserRouter>
//         </UserContext.Provider>
//       </Provider>
//     )
//   );

//   // Check if the header renders with Light mode initially
//   expect(screen.getByLabelText(/Light/i)).toBeInTheDocument();
//   expect(screen.getByLabelText(/Dark/i)).toBeInTheDocument();

//   // Simulate clicking the checkbox to toggle dark mode
//   const checkbox = screen.getByRole("checkbox");
//   fireEvent.click(checkbox);

//   // Check if setIsChecked was called
//   expect(setIsChecked).toHaveBeenCalledTimes(1);
// });
