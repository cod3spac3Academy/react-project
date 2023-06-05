import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  // comprobar que se renderiza el componente
  it("should render Footer component correctly", () => {
    render(<Footer />);
  });

  // comprobar que hay sections con el título section1 y section2 con cosas dentro
  it("should render a div with the class", () => {
    render(<Footer />);
    expect(screen.getByTitle("section1")).toHaveClass("footer-section1");
    expect(screen.getByTitle("section2")).toHaveClass("footer-section2");
    expect(screen.getByTitle("section1")).toContainHTML("div");
    expect(screen.getByTitle("section1").firstChild.firstChild).toContainHTML(
      "svg"
    );
  });

  it("should render Footer component correctly for mobile", () => {
    global.innerWidth = 400;
    render(<Footer />);
    expect(screen.getByTitle("section1")).toHaveClass("footer-section1");
    expect(screen.getByTitle("section2")).toHaveClass("footer-section2");
    expect(screen.getByTitle("section1")).toContainHTML("div");
    expect(screen.getByTitle("section1").firstChild.firstChild).toContainHTML(
      "svg"
    );
  });

  it("should render Footer component correctly for tablet", () => {
    global.innerWidth = 800;
    render(<Footer />);
  });

  it("should render Footer component correctly for desktop", () => {
    global.innerWidth = 1200;
    render(<Footer />);
  });

  /*   it("should render the mobile version correctly", () => {
    global.innerWidth = 600;

    render(<Footer />);

    let paragraph = screen.getByTitle("section1").firstChild.lastChild;
    expect(paragraph).toContainHTML("p");
    expect(paragraph).toHaveTextContent(
      "401 Broadway, 24th Floor New York, NY 10013"
    );
    // expect(paragraph).toHaveStyle("font-size: 1.1rem;");
    // expect(paragraph).toHaveStyle("font-size: 1.3rem;");
    // expect(paragraph).toHaveStyleRule("font-size: 1.1rem;");
    // expect(paragraph).toHaveStyleRule("font-size: 1.3rem;");
  }); */

/*     it("should render mobile version correctly", () => {
    global.innerWidth = 480; // Simula el ancho de pantalla para la versión móvil
    render(<Footer />);

    const icon = screen.getByTestId("icon");
    const styles = window.getComputedStyle(icon);
    console.log(styles.getPropertyValue("color")); // Verificar el valor del color

    expect(styles.getPropertyValue("color")).toBe("#d3a268");
  }); */


});
