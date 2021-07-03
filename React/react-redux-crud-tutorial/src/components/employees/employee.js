import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateEmp, deleteEmp } from "../../actions/empAction";
import EmpDataService from "../../services/EmpService";

const Emp = (props) => {
  const initialEmpState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentEmp, setCurrentEmp] = useState(initialEmpState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getEmp = id => {
    EmpDataService.get(id)
      .then(response => {
        setCurrentEmp(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmp(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEmp({ ...currentEmp, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentEmp.id,
      title: currentEmp.title,
      description: currentEmp.description,
      published: status
    };

    dispatch(updateEmp(currentEmp.id, data))
      .then(response => {
        console.log(response);

        setCurrentEmp({ ...currentEmp, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateEmp(currentEmp.id, currentEmp))
      .then(response => {
        console.log(response);

        setMessage("The emp was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeEmp = () => {
    dispatch(deleteEmp(currentEmp.id))
      .then(() => {
        props.history.push("/emps");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEmp ? (
        <div className="edit-form">
          <h4>Emp</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentEmp.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentEmp.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentEmp.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentEmp.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removeEmp}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Emp...</p>
        </div>
      )}
    </div>
  );
};

export default Emp;
