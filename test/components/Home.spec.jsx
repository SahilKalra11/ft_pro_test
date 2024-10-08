/**
 * Home.spec.jsx
 *
 * This file contains unit tests for the Home component using React Testing Library.
 *
 * Key Features:
 * - Tests rendering with provided props.
 * - Checks for empty content handling.
 * - Verifies percentage changes are displayed correctly.
 */

const React = require("react");
const { render } = require("@testing-library/react");
const Home = require("../../views/jsx/Components/Home/Home").default;
require("@testing-library/jest-dom");

describe("Home Component", () => {
  const mockData = [
    {
      basic: { name: "FTSE 100 Index" },
      quote: { change1Day: 1, change1DayPercent: 0.5456 },
    },
    {
      basic: { name: "S&P 500 Index" },
      quote: { change1Day: -1, change1DayPercent: -0.50234 },
    },
  ];

  it("renders correctly with given props", () => {
    const { getByText } = render(
      <Home pageTitle="Financial Times" content={mockData} />
    );
    expect(getByText("Financial Times")).toBeInTheDocument();
    expect(getByText("FTSE 100")).toBeInTheDocument();
    expect(getByText("S&P 500")).toBeInTheDocument();
  });

  it("handles empty content gracefully", () => {
    const { container, getByText } = render(
      <Home pageTitle="Financial Times" content={[]} />
    );

    expect(getByText("Financial Times")).toBeInTheDocument();
    expect(container.querySelector(".quotes").children.length).toBe(0);
  });

  it("displays percentage change correctly", () => {
    const { getByText } = render(
      <Home pageTitle="Financial Times" content={mockData} />
    );
    expect(getByText("0.55%")).toHaveClass("Up");
    expect(getByText("-0.50%")).toHaveClass("Down");
  });

  test("renders nothing when content is undefined or null", () => {
    const { container } = render(
      <Home pageTitle="Financial Times" content={null} />
    );

    // Check if no list is rendered when content is null
    expect(container.querySelector("ul")).toBeNull();
  });
});
