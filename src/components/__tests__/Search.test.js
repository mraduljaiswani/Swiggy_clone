import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("should check for search result", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const SearchBeforecards = screen.getAllByTestId("ResCard");
  expect(SearchBeforecards.length).toBe(20);

  const Searchbtn = screen.getByRole("button", { name: "Search" });
  const SearchInput = screen.getByTestId("SearchInput");
  // expect(Searchbtn).toBeInTheDocument();
  fireEvent.change(SearchInput, { target: { value: "foods" } });
  fireEvent.click(Searchbtn);
  const SearchAftercards = screen.getAllByTestId("ResCard");
  console.log(SearchAftercards);
  expect(SearchAftercards.length).toBe(1);
});

test("should check for top rated button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeButton = screen.getAllByTestId("ResCard");
  expect(cardsBeforeButton.length).toBe(20);
  const Ratedbtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });
  fireEvent.click(Ratedbtn);
  const cardsAfterButton = screen.getAllByTestId("ResCard");
  expect(cardsAfterButton.length).toBe(13);
});
