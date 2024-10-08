Financial Times Technical Test Documentation
Overview
This documentation outlines the implementation of a web application developed using React and Handlebars, based on the requirements of the Financial Times Technical Test. The application retrieves data from a provided API (“https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes”) and adheres to specified design guidelines.
Project Structure
The project consists of two primary components:
•	home.jsx: Responsible for rendering the main interface and fulfilling all requirements outlined in the README.
•	main.jsx: Acts as the entry point for the application.
Additionally, the project includes testing files:
•	Main.spec.jsx: Contains test cases for main entry point.
•	Home.spec.jsx: Contains test cases for main User Interface. 
•	api.spec.js: Contains test cases for API functionality.
•	app.spec.js: Contains test cases for all components.
Design Reference
The design for the application is based on the mockup provided at the following link:
 
Features
The application includes the following features:
•	Responsive Design: The layout adjusts to various screen sizes to ensure a seamless user experience across devices.
•	Accessibility: The application follows best practices for accessibility to ensure usability for all users.
•	Minimal Client-Side Dependencies: The application does not rely on client-side frameworks like Angular or libraries such as jQuery.
•	Built with JavaScript and Node.js: The core functionality is implemented using these technologies.
•	Origami Components: The application uses Origami components to ensure a consistent look and feel similar to ft.com.
•	Progressive Enhancement: The application is designed to work on basic browsers while enhancing the experience for those with modern capabilities.
•	Performance: The application is optimized to perform well even on 3G networks.
Setup Instructions
To run the application locally, follow these steps:
1.	Install Node Modules: Navigate to the project directory in your terminal and run the following command:
bash
npm install
2.	Start the Application: After installing the required modules, run the following command to start the application:
bash
npm run start
This will launch the application in your default web browser.
3.	Run Tests: To execute the test cases, use the following command:
bash
npm run test
This will run all the tests defined in api.spec.js and app.spec.js.
Conclusion: This documentation serves as a guide to understanding the structure, functionality, and setup of the Financial Times Technical Test application. By following the instructions, users can successfully run and test the application while appreciating its design and features.
