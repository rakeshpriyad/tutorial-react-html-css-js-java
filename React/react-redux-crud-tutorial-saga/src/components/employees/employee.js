import React from "react";
import EmpsList from "./employeeList";
class Emp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      firstName: "",
      lastName: ""
    }
  }



  render() {
    return (
      <div>
        <EmpsList />
      </div>
    );
  }
};

export default Emp;
