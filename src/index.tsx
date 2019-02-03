import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./config/route";

ReactDOM.render(
  <Router>{renderRoutes(Routes)}</Router>,
  document.getElementById("root")
);
