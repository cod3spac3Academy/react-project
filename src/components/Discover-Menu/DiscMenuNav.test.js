import { render, screen, fireEvent } from "@testing-library/react";
import DiscMenuNav from "./DiscMenuNav";

describe("DiscMenuNav", () => {
  
  //this test checks if the component renders correctly
  it("renders menu options", () => {
    render(<DiscMenuNav setSelectedMenu={() => {}} />);

    const menuOptions = screen.getAllByRole("heading");
    expect(menuOptions.length).toBe(2);
    expect(menuOptions[0]).toHaveTextContent("SPECIAL MENU");
    expect(menuOptions[1]).toHaveTextContent("DISCOVER MENU");
  });

  //this test checks if the component calls setSelectedMenu with the correct menu when an option is clicked
  it("calls setSelectedMenu with the correct menu when an option is clicked", () => {
    const setSelectedMenuMock = jest.fn();
    render(<DiscMenuNav setSelectedMenu={setSelectedMenuMock} />);

    const menuOption = screen.getByText("STARTERS");
    fireEvent.click(menuOption);

    expect(setSelectedMenuMock).toHaveBeenCalledTimes(1);
    expect(setSelectedMenuMock).toHaveBeenCalledWith("starters");
  });
});
