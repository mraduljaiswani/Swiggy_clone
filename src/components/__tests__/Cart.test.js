import { fireEvent, render, screen } from "@testing-library/react";
import React, { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should Load Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          {/* <Header /> */}
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Breads- (20)");
  fireEvent.click(accordianHeader);
  const fooditems = screen.getAllByTestId("fooditems");
  expect(fooditems.length).toBe(20);

  const addBtn = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  expect(screen.getAllByTestId("fooditems").length).toBe(22);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("fooditems").length).toBe(20);
  expect(screen.getByText("Please Add items to cart")).toBeInTheDocument();
});
