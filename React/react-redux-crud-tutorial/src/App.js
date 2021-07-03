import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddEmployee from "./components/employees/addEmployee";
import Employee from "./components/employees/employee";
import EmployeeList from "./components/employees/employeeList";

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
          <Route exact path={["/", "/emps"]} component={EmployeeList} />
          <Route exact path="/add" component={AddEmployee} />
          <Route path="/emps/:id" component={Employee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
