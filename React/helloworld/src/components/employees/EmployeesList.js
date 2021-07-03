import React from 'react'
import styles from './emp.list.module.css';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class EmployeeList extends React.Component {
  constructor(props) {
    super(props)
    /* this.state = {
      loading: true,
      employees: [],
      error: null,
    }; */

  }
  /* componentDidMount() {
    this.getEmployees();

  }

  async getEmployees() {
    this.setState({ loading: false, employees: (await this.fetch('get', '/employees')) || [] });
  }
 */

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


  render() {
    //let employees = {}
    // let elements = {}
    if (!this.props.employees) {
      return <div>Loading Employees...</div>
    }
    let employees = this.props.employees;

    /* elements = employees.map((e) => (
      <div className={styles.row} key={e.id}>
        <div className={styles.col} key={e.id}>{e.id}</div>
        <div className={styles.col} key={e.firstName}>{e.firstName}</div>
        <div className={styles.col} key={e.lastName}>{e.lastName}</div>
      </div>
    )) */

    let elements = employees.map((e) => (
      <tr>
        <td className={styles.col}>{e.id}</td>
        <td className={styles.col}>{e.firstName}</td>
        <td className={styles.col}>{e.lastName}</td>
      </tr>
    )
    )

    return (<div>
      <table id="employee" className={styles.empTable}>
      <thead>
        <tr>
          <th className={styles.header}>ID</th>
          <th className={styles.header}>First Name</th>
          <th className={styles.header}>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {elements}  
        </tbody>
      
      </table>
    </div>
    );

  }
}

export default EmployeeList;