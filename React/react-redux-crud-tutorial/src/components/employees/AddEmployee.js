import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmp } from "../../actions/empAction";

const AddEmp = () => {
  const initialEmpState = {
    id: null,
    firstName: "",
    lastName: "",
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
    const { firstName, lastName } = emp;

    dispatch(createEmp(firstName, lastName))
      .then(data => {
        setEmp({
          id: data.id,
          name: data.firstName,
          age: data.lastName,
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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={emp.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={emp.lastName}
              onChange={handleInputChange}
              name="lastName"
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
