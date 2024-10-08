# Financial Times Technical Test

## Exercise: Retrieve the data
Use the [securities quotes api](#using-our-securities-quotes-api) (also known as stock prices) to get the data for the items below and output the results in plain HTML.

## Exercise: Build the UI

## Prerequisites

Running this project requires [Node.js](https://nodejs.org/en/) 16.x or greater, and [npm](https://www.npmjs.com/).

## Getting started

1. Clone this repository to your machine.
1. Install the dependencies with `npm install`.
1. Start the app with `npm start`. Any changes you make will be automatically updated.
   - Used JSX? http://localhost:3000/jsx
   - Used Handlebars? http://localhost:3000/handlebars
1. Run tests with `npm test`.
1. Make changes to the template code by editing either `views/handlebars/home.handlebars` or `views/jsx/Components/Home.jsx` depending on whether you prefer using Handlebars or JSX, and for client-side code `src/styles.scss` and `src/main.js` for CSS and JS.
   - [Handlebars quick guide](#Handlebars)
1. For any server-side code you write, start in `app.js`.


## Using our Securities Quotes API

To fetch the day's percentage change for a security you can use our Securities Quotes API.

### HTTP Request

`GET https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`

### URL Query Parameters

| Parameter | Description |
|-----------|-------------|
| `symbols` | Any valid [symbol](Symbols) for a security, or a comma-separated list of [symbols](Symbols), e.g. for the FTSE 100, use `FTSE:FSI`. For the FTSE 100 and S&P 500, use `FTSE:FSI,INX:IOM`.  |

### Symbols

We would like you to display the information from the following symbols (these are the securities we show on the [FT.com front page](https://www.ft.com) 📰).

| Security        | Symbol     |
|-----------------|------------|
| FTSE 100        | `FTSE:FSI` |
| S&P 500         | `INX:IOM`  |
| Euro/Dollar     | `EURUSD`   |
| Pound/Dollar    | `GBPUSD`   |
| Brent Crude Oil | `IB.1:IEU` |


## Handlebars

Handlebars is a simple templating language.

We have set this test up to allow you to use either JSX or Handlebars. You can use a different templating language if you prefer, but you will need to add it.

Here is a quick guide that should cover all the bits you need:

OUTPUT data passed to the template
- Data passed in:

		{name: "testUser123"}
- Handlebars template:
		
		Hi {{name}}
- Output:
		
		Hi testUser123

Also supports dot notation for passing in more complex objects
- Data passed in:
		
		{user: {name: "testUser123"}}
- Handlebars template:
		
		Hi {{user.name}}
- Output:
		
		Hi testUser123

Alternatively
- Data passed in:
		
		{user: {name: "testUser123"}}
- Handlebars template:
		
		{{#with user}}{{name}}{{/with}}
- Output:
		
		Hi testUser123

ITERATION
- Data passed in:
		
		{fruit: ["apples", "pears", "oranges"]}
- Handlebars template:
		
		{{#each fruit}}-{{this}}- {{/fruit}}
- Output:
		
		-apples- -pears- -oranges-

CONDITIONALS
- Data passed in:
		
		{isLoggedIn: true}
- Handlebars template:
		
		{{#if isLoggedIn}} My account {{else}} Log in {{/if}} - 
		{{#unless isLoggedIn}} Register {{else}} Logged in {{/unless}}
- Output:
		
		My account - Logged in

Full docs: https://handlebarsjs.com/guide/
 
