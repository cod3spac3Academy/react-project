import CardInfoContainer from "./CardInfoContainer";
import { render, screen } from "@testing-library/react";


// create a test suite for the CardInfoContainer component
describe("CardInfoContainer", () => {
    // create a test that checks if the component renders without errors
    it("renders without errors", () => {
        render(<CardInfoContainer />);
    });
    // create a test that checks if the component renders the correct children
    it("renders the correct children", () => {
        render(
        <CardInfoContainer>
            <div data-testid="child">child</div>
        </CardInfoContainer>
        );
        const childElement = screen.getByTestId("child");
        expect(childElement).toBeInTheDocument();
    });
});
