/**
 * Main.spec.jsx
 *
 * This file contains unit tests for the Main component using React Testing Library.
 *
 * Key Features:
 * - Tests rendering without crashing.
 * - Checks correct HTML structure.
 * - Verifies props are passed correctly to the Home component.
 */

const React = require("react");
const { render } = require("@testing-library/react");
const Home = require("../../views/jsx/Components/Home/Home").default;
const Main = require("../../views/jsx/Main").default;
require("@testing-library/jest-dom");

jest.mock("../../views/jsx/Components/Home/Home");

describe("Main Component", () => {
  const props = {
    pageTitle: "Home",
    content: [
      {
        basic: { name: "FTSE 100 Index" },
        quote: { change1Day: 1, change1DayPercent: 0.5456 },
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
  });

  it("renders without crashing", () => {
    const { container } = render(<Main {...props} />);
    expect(container).toBeInTheDocument();
  });

  it("renders the correct HTML structure", () => {
    const { container } = render(<Main {...props} />);
    expect(container.querySelector("html")).toBeInTheDocument();
    expect(container.querySelector("head")).toBeInTheDocument();
    expect(container.querySelector("body")).toBeInTheDocument();
  });

  it("renders the Home component with props", () => {
    render(<Main {...props} />);
    expect(Home).toHaveBeenCalledWith(props, {});
  });

  it("handles missing props gracefully", () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
    expect(Home).toHaveBeenCalledWith({}, {});
  });

  it("should render without crashing when props are undefined", () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
  });
});
