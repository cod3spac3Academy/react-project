import { render, screen } from "@testing-library/react";
import DiscMenuApp from "./DiscMenuApp";

describe("DiscMenuApp", () => {
  //this test is to check if the component renders

  test("renders DiscMenuApp component", () => {
    render(<DiscMenuApp />);
    const discMenuAppElement = screen.getByTestId("DiscMenuApp");
    expect(discMenuAppElement).toBeInTheDocument();
  });

  //this test is to check if the component renders the correct text

  test("renders DiscMenuApp component", () => {
    render(<DiscMenuApp />);
    const discMenuAppElement = screen.getByTestId("DiscMenuApp");
    const viewMenuButton = screen.getByText("VIEW FULL MENU");
    expect(viewMenuButton).toBeInTheDocument();
  });
});
