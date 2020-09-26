import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";
import movieService from "./services/movie.service";

function App() {
  return (
    <Router>
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/classicmovies"} className="nav-link">
              Classic Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/details/cw0121766"} className="nav-link">
              Movie Info
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/classicmovies" component={Home} />
          <Route path="/details/:id" component={DetailsPage} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;