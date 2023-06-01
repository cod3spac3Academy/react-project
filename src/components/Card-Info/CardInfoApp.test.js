import React from "react";
import { render,screen } from "@testing-library/react";
import CardInfoApp from "./CardInfoApp";


// create a test suite for the CardInfoApp component
describe("CardInfoApp", () => {
  // create a test that checks if the component renders without errors
  it("renders without errors", () => {
    render(<CardInfoApp />);
  });
  // create a test that checks if the component renders the correct children
  it("renders the correct number of CardInfoWrapper components", () => {
    render(<CardInfoApp />);
    const cardInfoWrapperElements = screen.getAllByTestId("card-info-wrapper");
    expect(cardInfoWrapperElements.length).toEqual(3);
  });
});
