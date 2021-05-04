// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "../sass/main.scss";

// ReactDOM.render(<App />, document.querySelector("#root"));

// server.jsx

const express = require("express");     // importing the express library

const app = express();  // this app object right here, is used to set up configuration that will listen for incoming requests that are being routed to the Express side of the app from the node side and then route those requests on to different route handlers. So all of these different route handlers that we are going to be creating over time will be all associated or somehow registered with this app object.


// Create the router handlers
app.get("/", (req, res) => {
    res.send({ hi: "there"});
});

app.listen(3000);