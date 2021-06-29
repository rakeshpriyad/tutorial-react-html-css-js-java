import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/emps" className="navbar-brand">
          Employees
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/emps"} className="nav-link">
              Emp
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/emps"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/emps/:id" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
