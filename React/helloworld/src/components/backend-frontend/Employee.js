import React from 'react'

import styles from './emp.details.module.css';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class Employee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      emp: {},
      error: null,
    };

  }




  saveEmp = async () => {

    let emp = this.state.emp;
    if (emp.id) {
      console.log(emp.id)
      await this.fetch('put', `/employees/${emp.id}`, emp);
    } else {
      await this.fetch('post', '/employees', emp);
    }

  }



  async fetch(method, endpoint, body) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          // authorization: `Bearer ${await this.props.authService.getAccessToken()}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);

      this.setState({ error });
    }
  }

  handleChange = (event) => {
    let e = { [event.target.name]: event.target.value };
    console.log(e);

    this.setState(prevState => ({
      emp: {                   // object that we want to update
        ...prevState.emp,    // keep all other key-value pairs
        [event.target.name]: event.target.value       // update the value of specific key
      }
    }))
    console.log(this.state.emp)
  }


  render() {
    let emp = {};
    if (this.state.emp) {
      emp = this.state.emp
    }
    return (
      <div>
        <form action="http://localhost:8080/rest/employees" method="post">
          <label> ID</label> <br />
          <input type="text" name="id" id="id" onChange={this.handleChange} /> <br />

          <label> First Name</label> <br />
          <input type="text" name="firstName" id="firstName" onChange={this.handleChange} /> <br />

          <label> Last Name</label> <br />
          <input type="text" name="lastName" id="lastName" onChange={this.handleChange} /> <br />


          <input type="button" value="Register" onClick={this.saveEmp} /> <br />
        </form>
        <div>Name: {emp.firstName}</div>
      </div>

    )
  }
}

export default Employee;