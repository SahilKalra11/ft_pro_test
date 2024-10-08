/** this is a generic layout template,  */
import React from "react";
import Home from "./Components/Home/Home";

/**
 * Main.jsx
 *
 * This component serves as the main entry point for rendering the application
 * in JSX format. It includes the necessary HTML structure and loads the Home component.
 *
 * Props:
 * - pageTitle (string): The title of the page.
 * - content (array): An array of stock data to be displayed.
 *
 * Key Features:
 * - Renders a complete HTML document including head and body.
 * - Loads CSS and JavaScript assets.
 */

export default function Main(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Financial Times technical test</title>
        <link rel="stylesheet" type="text/css" href="/dist/css/styles.css" />
        <script src="/dist/js/main.js" defer></script>
      </head>
      <body>
        <Home {...props} />
      </body>
    </html>
  );
}
