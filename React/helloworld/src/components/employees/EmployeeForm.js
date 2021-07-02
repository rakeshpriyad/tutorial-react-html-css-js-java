import React from 'react'

import styles from './emp.form.module.css';
import EmployeeList from './EmployeesList';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class EmployeeForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      emp: {},
      employees: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  async getEmployees() {
    this.setState({ loading: false, employees: (await this.fetch('get', '/employees')) || [] });
  }


  saveEmp = async () => {

    let emp = this.state.emp;
    if (emp.id) {
      console.log(emp.id)
      await this.fetch('put', `/employees/${emp.id}`, emp);
    } else {
      await this.fetch('post', '/employees', emp);
    }

    this.getEmployees();
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

    emp = this.state.emp

    return (
      <div>

        <form action="http://localhost:8080/rest/employees" method="post">
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.column}>
                <label> ID</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="id" id="id" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <label> First Name</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <label>Last Name</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <input type="button" value="Save" onClick={this.saveEmp} />
              </div>
              <div className={styles.column}>
                <input type="button" value="Update" onClick={this.saveEmp} />
              </div>
            </div>
          </div>
        </form>
        <div>
          <EmployeeList employees={this.state.employees} />
        </div>
      </div>
    )
  }
}

export default EmployeeForm;