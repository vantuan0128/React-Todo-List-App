import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
This is a code snippet that uses the ReactDOM.createRoot() method to create a root for a React application. 
The createRoot() method takes in a DOM container element as an argument, in this case, 
the element with an id of "root". The createRoot() method returns a root object, which is stored in the root variable.
The render() method is then called on the root object to render the React application. 
The render() method takes in a JSX element as an argument, which represents the structure of the application.
In this case, the JSX element consists of a React.StrictMode component that wraps around an App component. T
he React.StrictMode component is used to highlight potential problems in an application and helps with development.
*/