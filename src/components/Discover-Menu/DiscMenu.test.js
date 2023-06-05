import { render, screen } from "@testing-library/react";
import DiscMenu from "./DiscMenu";

describe("DiscMenu", () => {
  // This test is to check if the image is displayed
  test("displays menu item title", () => {
    const mockImage = {
      path: "image-path.jpg",
      text: "Image description",
    };
    render(
      <DiscMenu
        image={mockImage}
        title="Delicious Burger"
        badge="New"
        description="A mouthwatering burger with juicy patty and fresh toppings"
        price={9.99}
      />
    );

    const titleElement = screen.getByText("Delicious Burger");
    expect(titleElement).toBeInTheDocument();
  });

  // This test is to check if the badge is displayed
  test("displays formatted price", () => {
    const mockImage = {
      path: "image-path.jpg",
      text: "Image description",
    };

    render(
      <DiscMenu
        image={mockImage}
        title="Delicious Burger"
        badge="New"
        description="A mouthwatering burger with juicy patty and fresh toppings"
        price={9.99}
      />
    );

    const priceElement = screen.getByText("$09.99");
    expect(priceElement).toBeInTheDocument();
  });
});
