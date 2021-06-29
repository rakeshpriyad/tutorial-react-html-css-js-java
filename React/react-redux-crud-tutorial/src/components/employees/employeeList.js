import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEmps,
  findEmpsByTitle,
  deleteAllEmps,
} from "../actions/emps";
import { Link } from "react-router-dom";

const EmpsList = () => {
  const [currentEmp, setCurrentEmp] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const emps = useSelector(state => state.emps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEmps());
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentEmp(null);
    setCurrentIndex(-1);
  };

  const setActiveEmp = (emp, index) => {
    setCurrentEmp(emp);
    setCurrentIndex(index);
  };

  const removeAllEmps = () => {
    dispatch(deleteAllEmps())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findEmpsByTitle(searchTitle));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Emps List</h4>

        <ul className="list-group">
          {emps &&
            emps.map((emp, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEmp(emp, index)}
                key={index}
              >
                {emp.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEmps}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentEmp ? (
          <div>
            <h4>Emp</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentEmp.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentEmp.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentEmp.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/emps/" + currentEmp.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Emp...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpsList;
