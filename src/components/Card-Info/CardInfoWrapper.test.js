import CardInfoWrapper from "./CardInfoWrapper";
import { render, screen } from "@testing-library/react";


// create a test suite for the CardInfoWrapper component
describe("CardInfoWrapper", () => {

    // create a test that checks if the component renders without errors
    it("renders without errors", () => {
        render(<CardInfoWrapper />);
    });

    //create a test that checks if the component renders the correct children
    it("renders the correct children", () => {
        render(
        <CardInfoWrapper>
            <div data-testid="child">child</div>
        </CardInfoWrapper>
        );
        const childElement = screen.getByTestId("child");
        expect(childElement).toBeInTheDocument();
    });
});