import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmp } from "../actions/emps";

const AddEmp = () => {
  const initialEmpState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [emp, setEmp] = useState(initialEmpState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmp({ ...emp, [name]: value });
  };

  const saveEmp = () => {
    const { name, age } = emp;

    dispatch(createEmp(name, age))
      .then(data => {
        setEmp({
          id: data.id,
          name: data.name,
          age: data.age,
          active: data.active
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmp = () => {
    setEmp(initialEmpState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmp}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={emp.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              required
              value={emp.age}
              onChange={handleInputChange}
              name="age"
            />
          </div>

          <button onClick={saveEmp} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmp;
