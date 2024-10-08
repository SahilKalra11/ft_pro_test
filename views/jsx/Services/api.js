const fetchStockData = async () => {
  const url =
    "https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI,INX:IOM,EURUSD,GBPUSD,IB.1:IEU";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching stock data");
    }
    const data = await response.json();
    return data.data.items;
  } catch (error) {
    return [];
  }
};

module.exports = { fetchStockData };
