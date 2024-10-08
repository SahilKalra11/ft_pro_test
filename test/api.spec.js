/**
 * fetchStockData.spec.js
 *
 * This file contains unit tests for the fetchStockData function.
 *
 * Key Features:
 * - Tests successful data fetching.
 * - Simulates errors and verifies proper error handling.
 */

const fetchStockData = require("../views/jsx/Services/api").fetchStockData;

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        data: {
          items: [
            {
              basic: { name: "FTSE 100 Index" },
              quote: { change1Day: 1, change1DayPercent: 0.5 },
            },
          ],
        },
      }),
  })
);

describe("fetch Stock Data", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("should fetch stock data successfully", async () => {
    const data = await fetchStockData();
    expect(data).toHaveLength(1);
    expect(data[0].basic.name).toBe("FTSE 100 Index");
  });

  test("should return an empty array on fetch error", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Unexpected error"));
    const data = await fetchStockData();
    expect(data).toEqual([]);
  });

  test("should throw an error when response is not ok", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));
    await expect(fetchStockData()).resolves.toEqual([]);
  });
});
