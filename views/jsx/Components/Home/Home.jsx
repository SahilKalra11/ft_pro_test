/** You can submit this test using either Handlebars or JSX as a templating engine. This is the file to work in if you would like to use JSX */

import React, { useMemo } from "react";

/**
 * Home.jsx
 *
 * This component displays the main content of the application, including stock data.
 * It shows the page title and a list of stock quotes with their percentage changes.
 *
 * Props:
 * - pageTitle (string): The title of the page.
 * - content (array): An array of stock data objects.
 *
 * Key Features:
 * - Conditionally renders stock data or a message when no data is available.
 * - Applies CSS classes based on stock performance.
 * - Validates props using PropTypes.
 */

export default function Home({ pageTitle, content }) {
  const hero = (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  );

  const getName = (quote) =>
    quote.replace(/(Index|FX Spot Rate|Sterling|ICE|Front|Month)/gi, "").trim();

  const renderQuotes = useMemo(() => {
    if (!content) return null;

    const data = content.map((item, index) => (
      <li key={index} className="quote">
        <h2>{getName(item?.basic?.name)}</h2>
        <p className={item?.quote?.change1Day >= 0 ? "Up" : "Down"}>
          {item?.quote?.change1DayPercent &&
            Number(item?.quote?.change1DayPercent).toFixed(2)}
          %
        </p>
      </li>
    ));

    return <ul className="quotes">{data}</ul>;
  }, [content]);

  return (
    <div className="full-container">
      <div className="container">
        {hero}
        {renderQuotes}
      </div>
    </div>
  );
}
