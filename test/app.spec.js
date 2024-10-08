/**
 * app.spec.js
 *
 * This file contains integration tests for the Express server.
 *
 * Key Features:
 * - Tests basic server functionality and response statuses.
 * - Verifies that the appropriate routes return the expected results.
 */

const request = require("supertest");
const subject = require("../app");
const { fetchStockData } = require("../views/jsx/Services/api");

jest.mock("../views/jsx/Services/api");

describe("Testing the server", () => {
  it("can run the express server and return a 200", async () => {
    const response = await request(subject).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should render the start page on GET /", async () => {
    const response = await request(subject).get("/");
    expect(response.status).toBe(200);
  });

  it("should fetch stock data and render Main.jsx on GET /jsx", async () => {
    const mockData = {
      data: {
        items: [
          {
            symbolInput: "FTSE:FSI",
            basic: {
              name: "FTSE 100 Index",
            },
            quote: {
              lastPrice: 7429.56,
            },
          },
        ],
      },
    };

    fetchStockData.mockResolvedValue(mockData.data.items); // Mock the fetchStockData implementation

    const response = await request(subject).get("/jsx");
    expect(response.status).toBe(200);
    expect(fetchStockData).toHaveBeenCalled(); // Ensure the fetchStockData function was called
    expect(response.text).toContain("Financial Times"); // Ensure the page title is correct
    expect(response.text).toContain("FTSE 100"); // Ensure the stock data is rendered
  });

  it("should handle errors when fetching stock data", async () => {
    fetchStockData.mockResolvedValueOnce([]); // Simulate an empty response

    const response = await request(subject).get("/jsx");
    expect(response.status).toBe(200);
    expect(fetchStockData).toHaveBeenCalled();
    expect(response.text).toContain("Financial Times"); // Ensure the page title is still rendered
  });

  it("should render the handlebars template on GET /handlebars", async () => {
    const response = await request(subject).get("/handlebars");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Home"); // Ensure the page title is correct
    expect(response.text).toContain("Hello World!"); // Ensure content is rendered
  });

  it("should return 404 for non-existent routes", async () => {
    const response = await request(subject).get("/non-existent");
    expect(response.status).toBe(404);
  });
});
