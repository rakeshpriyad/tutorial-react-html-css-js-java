import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveEmps,
  findByFirstName,
  deleteAllEmps,
} from "../../actions/empAction";
import { Link } from "react-router-dom";

const EmpsList = () => {
  const [currentEmp, setCurrentEmp] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchText, setSearchText] = useState("");

  const emps = useSelector(state => state.emps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEmps());
  }, []);

  const onChangeSearchTitle = e => {
    const searchText = e.target.value;
    setSearchText(searchText);
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

  const findByName = () => {
    refreshData();
    dispatch(findByFirstName(searchText));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by firstName"
            value={searchText}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
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
                {emp.firstName}
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
                <strong>First Name:</strong>
              </label>{" "}
              {currentEmp.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentEmp.lastName}
            </div>
           

            <Link
              to={"/employees/" + currentEmp.id}
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
