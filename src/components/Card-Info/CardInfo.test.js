import { render, screen } from "@testing-library/react";
import CardsInfo from "./CardInfo";

// create a test suite for the CardsInfo component
describe("CardsInfo", () => {
  // create a test that checks if the component renders without errors
  it("renders without errors", () => {
    const props = {
        img: {
          path: "image.jpg",
          text: "Image",
        },
        subtitle: "Subtitle",
        title: "Title",
        strong: "Strong",
        buttonLabel: "Button",
        buttonDisabled: false,
      };
  
      render(<CardsInfo {...props} />);
    });

    // create a test that checks if the component renders the correct children
    it("renders component elements correctly", () => {
        const props = {
          img: {
            path: "image.jpg",
            text: "Image",
          },
          subtitle: "Subtitle",
          title: "Title",
          strong: "Strong",
          buttonLabel: "Button",
          buttonDisabled: false,
        };
    
        render(<CardsInfo {...props} />);
    
        const imgElement = screen.getByAltText(props.img.text);
        const subtitleElement = screen.getByText(props.subtitle);
        const titleElement = screen.getByText(props.title);
        const strongElement = screen.getByText(props.strong);
    
        // Assertion statements
        expect(imgElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(strongElement).toBeInTheDocument();
      });
});
